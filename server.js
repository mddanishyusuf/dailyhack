const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();

        server.get('/post/:slug', (req, res) => {
            const actualPage = '/post'
            var slugArray = req.params.slug.split('-')

            const [number] = slugArray.slice(-1)
            slugArray.splice(-1,1)
            const slug = slugArray.join('-')
            
            const queryParams = { number, slug }
            app.render(req, res, actualPage, queryParams)
        })

        server.get('/page/:page_number', (req, res) => {
            const actualPage = '/index'
            const page_number = req.params.page_number
            const queryParams = { page_number }
            app.render(req, res, actualPage, queryParams)
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, err=> {
            if(err) throw err;
            console.log('Server is running on localhost 3000')
        })
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1)
    })