const http = require('http');

const port  = process.env.port || 3000

server = http.createServer((req, res)=>{
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>This is Yash Vardhan Singh</h1> <p>www</p>');
})

server.listen(port, ()=> {
    console.log(`This is the port ${port}`);
})