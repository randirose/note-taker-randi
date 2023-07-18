const router = require('express').Router();
const readAndWrite = require('../../helpers/readAndWrite.js');
const deleteNote = require('../../helpers/deleteNote.js');
const { v4: uuidv4 } = require('uuid');
const util = require('util');
const fs = require('fs');
const readFromFile = util.promisify(fs.readFile);

// get request
router.get('/', (req,res)=>{
    readFromFile('./db/notes.json')
    .then((data) => res.json(JSON.parse(data)))
    .catch(error => {
        if (error.name === 'SyntaxError' && error.message.includes('Unexpected end of JSON input')) {
            console.error('Truncated data: Not all of the JSON data was received'); // this error was kicking me out of my server every time on local host, added this to catch the error
        } else {
            console.error(error);
        }
    })
});

// post request
router.post('/', (req,res)=>{
    // destructuring assignment for the items in req.body
    const { title, text } = req.body;
    // if all required props are present
    if(req.body){
        const newNote = {
            title,
            text,
            id: uuidv4(), //unique identifier function, from uuid library
        };

        readAndWrite(newNote, './db/notes.json');
    

    const response = {
        status: 'success',
        body: newNote
    }
    res.json(response);
    console.log(response);
} else {
    res.json('error in posting new note');
    console.log('error in posting new note');
}
});

// delete request
router.delete('/:id', (req,res)=>{
    // receives a query parameter that contains the id of a note to delete
    const deletedNote = req.params.id;
    if (deletedNote){
        deleteNote(deletedNote, './db/notes.json');
        const response = {
            status: 'success',
            body: deletedNote
        }
        res.json(response);
        console.log(response);
    } else {
        res.json('error in deleting note');
        console.log('error in deleting note');
    }
    
})



module.exports = router;