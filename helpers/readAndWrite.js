const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);
const writeToFile = util.promisify(fs.writeFile);


const readAndWrite = (content, file) => {
    readFromFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeToFile(file, JSON.stringify(parsedData, null, 4), (err =>
            err ? console.error(err) : console.info(`data written to ${file}`)
            ));
      }
    });
  };





module.exports = readAndWrite;