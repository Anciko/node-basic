let fs = require('fs');

let myReadableStr = fs.createReadStream('nice.txt');

myReadableStr.on('data', function(chunk) {
    console.log('We got buffer chunk!');
    console.log(chunk);
})