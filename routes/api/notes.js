const router = require('express').Router();
const readAndWrite = require('../../helpers/readAndWrite.js');
const deleteNote = require('../../helpers/deleteNote.js');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const util = require('util');
const fs = require('fs');
const readFromFile = util.promisify(fs.readFile);

router.get('/', async (req,res)=>{
    await readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

router.post('/', (req,res)=>{
    //destructuring assignment for the items in req.body
    const { title, text } = req.body;
    //if all required props are present
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

router.delete('/:id', (req,res)=>{
    //should receive a query parameter that contains the id of a note to delete
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