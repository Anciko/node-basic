let fs = require('fs');

// fs.unlink('note.txt', function (err) {
//     if (err)
//         console.log(err);
// });

fs.mkdir("Best", function (err) {
    if(err) console.log(err);
});