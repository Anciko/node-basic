const help = require('./helper');
const tt = require('./Test');

tt();
help.fonky();
help.goofy();

/* helper.js (multi module exports)
=============== 

 var fonky = function () {
    console.log("I am fonky method");
}

var goofy = function () {
    console.log("I am goffy method");
}

// module.exports = {
//     fonky: fonky,
//     goofy: goofy
// }

module.exports = { fonky, goofy }
 */


// Test.js (multi file exports)
// ==========
// var tester = function() {
//     console.log("I am from Test module");
// }

// module.exports = tester;