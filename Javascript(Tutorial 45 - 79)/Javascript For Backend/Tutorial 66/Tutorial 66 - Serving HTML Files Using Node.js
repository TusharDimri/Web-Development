const http = require("http");

const fs = require('fs');
const fileContent = fs.readFileSync('Tutorial66.html', 'utf-8');

const server = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-type':'text/html'});
    // 200 is the response code
    response.end(fileContent);
})

server.listen(80, '127.0.0.1', ()=>{
    console.log('Listening on port 80');
});
// The server listens on port 80 and is create don the local host
// Note:- If we use port 80, we won't need to explicitly mention the port later in its url.(url="127.0.0.1")
// But in  case of port 8000, url would be:- "127.0.0.1:8000"