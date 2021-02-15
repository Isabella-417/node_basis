"use strict";
const fs = require("fs");
const file = process.argv[2];
fs.readFile(file, "utf8", (err, data) => {
  if (err) {
    console.log(error);
  }
  let lineNumbers = data.toString().split("\n").length - 1;
  console.log(lineNumbers);
});
