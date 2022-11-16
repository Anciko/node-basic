const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : 'application/json'});

    let obj = {
        name : 'Hello',
        age : 21,
        family : {
            father : "U Mya",
            mother : "Daw Nu"
        }
    };

    res.end(JSON.stringify(obj));
});


server.listen(3000, () => {
    console.log(`Seever is runnin at port 3000`);
})

