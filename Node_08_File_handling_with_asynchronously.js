let fs = require('fs');

let data = "Lorem ipsum dollar sumit";
fs.writeFile('nice.txt', data, function (err) {
    if (err)
        console.log(err);
    else
        console.log("File write successfully!");
});

fs.appendFile('nice.txt', 'Jacket fil' ,function(err) {
    if(err) console.log(err);
    else console.log("Append file succesfully");
});

fs.readFile('nice.txt', 'utf-8', function (err, result) {
    if (err) 
        console.log(err);
    else 
        console.log("File read successfully!");
        console.log(result);
})
