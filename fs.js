'use strict';

const fs = require('fs');

// let file = fs.readFileSync(process.argv[2]);

// let str = file.toString();

// let lines = str.split('\n');

// let numberOfLines = lines.length - 1;

const contents = fs.readFileSync(process.argv[2]);
const lines = contents.toString().split('\n').length - 1;

console.log(lines);