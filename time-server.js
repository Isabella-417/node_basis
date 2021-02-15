"use strict";

const net = require("net");
const port = process.argv[2];

function getTime() {
  const date = new Date();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  return `${date.getFullYear()}-${month}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}

const server = net.createServer((socket) => {
  socket.end(getTime() + "\n");
});

server.listen(Number(port));
