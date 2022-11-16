const fs = require('fs');

let data = "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.";
fs.writeFileSync('note.txt', data);
fs.appendFileSync('note.txt', " Ho ho" );

let data3 = fs.readFileSync('note.txt', 'utf-8');
console.log(data3);
