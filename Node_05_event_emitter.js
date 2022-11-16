let event = require('events');
let myEmitter = new event.EventEmitter();

myEmitter.on('startW', function () {
    console.log("I am start working...");
})

myEmitter.emit('startW');

let i = 0;
setInterval(() => {
    i++;
    if ((i % 3 == 0))
        myEmitter.emit('startW');
    else
        console.log("Waiting to emit!");
}, 1000);