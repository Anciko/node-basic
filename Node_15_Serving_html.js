const http = require('http');
const fs = require("fs");

let myReadStr = fs.createReadStream('index.html', 'utf-8');
let server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/html"});
    myReadStr.pipe(res);
});


server.listen(3000, () => {
    console.log(`Server is running at port 3000`);
});