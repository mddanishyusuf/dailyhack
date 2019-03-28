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

            paramArray = req.params.slug.split('-')
            let number = paramArray.splice(paramArray.length-1,1).join('-')

            slugArray = req.params.slug.split('-');
            slugArray.splice(slugArray.length-1,1)
            let slug = slugArray.join('-')
            
            const queryParams = { number, slug }
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