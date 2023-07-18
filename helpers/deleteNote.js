const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);
const writeToFile = util.promisify(fs.writeFile);

// receives deleted note id from router.delete call and removes from array, re-writes to file
const deleteNote = (deletedNote, file) => {
    readFromFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const notes = JSON.parse(data);
        const newArr = Object.values(notes).filter((note)=>note.id !== deletedNote);
        writeToFile(file, JSON.stringify(newArr, null, 4), (err =>
            err ? console.error(err) : console.info(`note deleted from ${file}`)
            ));
      }
    });
  };



module.exports = deleteNote;