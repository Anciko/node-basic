let fs = require('fs');

let myReadStr = fs.createReadStream('nice.txt', 'utf-8');
let myWriteStr = fs.createWriteStream('best.txt');

myReadStr.on('data', function(chunk) {
    myWriteStr.write(chunk);
})