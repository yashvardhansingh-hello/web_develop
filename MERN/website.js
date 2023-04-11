const http = require('http');
const fs = require('fs');
const port  = process.env.port || 3000

server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        res.end('<h1>This is Yash Vardhan Singh</h1> <p>www</p>');
    }
    else if (req.url === '/about') {
        res.end('<h1>About</h1> <p>www</p>');
    }
    
    else if (req.url === '/yash') {
        const myfs = fs.readFileSync('./js_practice/index.html')
        res.end(myfs);
    }

    else {
        // res,yash()
        res.statusCode = 404;
        res.end('This page is not found on this server')
    }
})

server.listen(port, ()=> {
    console.log(`This is the port ${port}`);
})