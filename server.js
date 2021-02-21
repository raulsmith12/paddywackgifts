const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get('/shop.html', (req, res) => {
        return app.render(req, res, '/shop');
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, '0.0.0.0', err => {
        if (err) throw err;
        console.log(`${'\u2705'} Ready on http://localhost:${port}`);
    });
});
