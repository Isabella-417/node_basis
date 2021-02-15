const fs = require("fs");

module.exports = function (directory, extension, callback) {
  fs.readdir(directory, (err, list) => {
    if (err) {
      return callback(err);
    }

    const listFiltered = list.filter((folder) => folder.endsWith(`.${extension}`));
    return callback(null, listFiltered);
  });
};
