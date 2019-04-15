const cacheableResponse = require('cacheable-response')
const express = require('express');
const next = require('next');
const axios = require('axios');
const fs = require("fs");

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const { DESTINATION, createSitemap } = require("./sitemap");

const ssrCache = cacheableResponse({
    ttl: 1000 * 30 * 60, // 30min
    get: async ({ req, res, pagePath, queryParams }) => ({
      data: await app.renderToHTML(req, res, pagePath, queryParams)
    }),
    send: ({ data, res }) => res.send(data)
})

app
    .prepare()
    .then(() => {
        const server = express();

        server.get("/sitemap.xml", function(req, res) {
            res.header("Content-Type", "application/xml");
            (async function sendXML() {
              let xmlFile = await createSitemap();
              res.send(xmlFile);
              fs.writeFileSync(DESTINATION, xmlFile);
            })();
         });

        server.get('/post/:slug', (req, res) => {
            const pagePath = '/post'
            var slugArray = req.params.slug.split('-')

            const [number] = slugArray.slice(-1)
            slugArray.splice(-1,1)
            const slug = slugArray.join('-')
            
            const queryParams = { number, slug }
            // app.render(req, res, pagePath, queryParams)
            return ssrCache({ req, res, pagePath, queryParams })
        })

        server.get('/page/:page_number', (req, res) => {
            const pagePath = '/'
            const page_number = req.params.page_number
            const queryParams = { page_number }
            return ssrCache({ req, res, pagePath, queryParams })
            // app.render(req, res, pagePath, queryParams)
        })

        server.get('/tag/:tag_name', (req, res) => {
            const pagePath = '/tag'
            const tag_name = req.params.tag_name
            const queryParams = { tag_name }
            return ssrCache({ req, res, pagePath, queryParams })
            // app.render(req, res, pagePath, queryParams)
        })

        server.get('/search/:keywords', (req, res) => {
            const pagePath = '/search'
            const keywords = req.params.keywords
            const queryParams = { keywords }
            return ssrCache({ req, res, pagePath, queryParams })
            // app.render(req, res, pagePath, queryParams)
        })

        server.get('/', (req, res) => ssrCache({ req, res, pagePath: '/' }))

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(port, err=> {
            if(err) throw err;
            console.log(`> Ready on http://localhost:${port}`)
        })
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1)
    })