const { readFile, writeFile } = require("fs");

const openF = (file) => {
  const fileData = readFile(file, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
  return fileData;
};

const writeF = (file, content) => {
  writeFile(file, content, (err) => {
    if (err) return console.log(err);
  });
};


module.exports = {openF, writeF};