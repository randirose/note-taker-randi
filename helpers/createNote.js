const fs = require('fs');


const createNote = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        fs.writeFile(file, JSON.stringify(parsedData, null, 4), (err =>
            err ? console.error(err) : console.info(`data written to ${file}`)
            ));
      }
    });
  };





module.exports = createNote;