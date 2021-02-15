"use strict";
const http = require("http");
const url = process.argv[2];
let data = "";

http.get(url, (response) => {
  response.setEncoding("utf8");

  response.on("data", (info) => {
    data += info;
  });
  response.on("end", (info) => {
    console.log(data.length);
    console.log(data);
  });
});

// Other solution:
// const http = require('http')
// const bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })
