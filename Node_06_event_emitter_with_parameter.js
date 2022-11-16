const event = require('events');

const myEmitter = new event.EventEmitter();

myEmitter.on('donow', function(val) {
    console.log("I am doing now." + val);
});

myEmitter.emit('donow', "Sir Waifer Kolar");