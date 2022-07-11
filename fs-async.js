'use strict'
const fs = require('fs');
// var file = process.argv[2];

// fs.readFile(file, function(err, contents) {
//     var lines = contents.toString().split('\n').length - 1;
//     console.log(lines);
// })

const file = process.argv[2];

fs.readFile(file, function(err, contents) {
    if (err) {
        return console.log(err);
    }

    const lines = contents.toString().split('\n').length - 1;
    console.log(lines);
})