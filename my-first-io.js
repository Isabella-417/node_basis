'use strict'
const fs = require("fs");

buffer = fs.readFileSync(process.argv[2]);
let lineNumbers = buffer.toString().split("\n").length - 1;
console.log(lineNumbers)
