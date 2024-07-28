const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('This is our about page')
    }
    res.end(`
        <h1>Oops!!</h1>
        `)
});

server.listen(3000);