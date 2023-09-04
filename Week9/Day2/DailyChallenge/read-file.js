const fs = require("fs");

const readFromFile = (filepath) => { fs.readFile(filepath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
})
};

module.exports = {readFromFile}

