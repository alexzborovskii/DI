const { readFile, writeFile } = require("fs");

const copyText = (source, destionation) => {
  const fileData = readFile(source, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    writeFile(destionation, data, (err) => {
      if (err) return console.log(err);
    });
    console.log("Text Copied successfully!");
  });
};

copyText('source.txt', 'destination.txt')


// module.exports = {copyText};