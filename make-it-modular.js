"use strict";
const filteringData = require("./mymodule");

const directory = process.argv[2];
const ext = process.argv[3];

const callback = (err, list) => {
  if (err) throw err;
  list.forEach((element) => {
    console.log(element);
  });
};

filteringData(directory, ext, callback);
