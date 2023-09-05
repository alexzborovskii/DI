const http = require('http');
const { url } = require('inspector');


const server = http.createServer((req, res) => {
    console.log('url=> ', req.url);
    console.log('headers=> ', req.headers);
    console.log('getting your requiest on my first server');
    if(req.url =='/') {
        // if (req.method =='GET'){
        //     console.log()
        // }
        res.end("<h1>Home</h1>");
    } else if (req.url == "/about") {
        res.end("<h1>Page not found</h1>");
    }
    // res.end('hello from my first server');
})

server.listen(5000, ()=>{
    console.log('run on port 5000');
})