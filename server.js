const cacheableResponse = require('cacheable-response')
const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const ssrCache = cacheableResponse({
    ttl: 1000 * 60 * 60, // 1hour
    get: async ({ req, res, pagePath, queryParams }) => ({
      data: await app.renderToHTML(req, res, pagePath, queryParams)
    }),
    send: ({ data, res }) => res.send(data)
})

app
    .prepare()
    .then(() => {
        const server = express();

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