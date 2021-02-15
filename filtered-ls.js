"use strict";
const fs = require("fs");
const directory = process.argv[2];
const ext = process.argv[3];

fs.readdir(directory, (err, list) => {
  if (err) {
    console.log(err);
  }

  const listFiltered = list.filter((folder) => {
    if (folder.endsWith(`.${ext}`)) {
      console.log(folder);
    }
  });
});
