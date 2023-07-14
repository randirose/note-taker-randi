const router = require('express').Router();
// const createNote = require('../../helpers/createNote.js');
// const deleteNote = require('../../helpers/deleteNote.js');
let notesArr = require('../../db/db.json');

router.get('/notes', (req,res)=>{
    console.log('notes GET success');
    //read db.json file and return all saved notes as json
});

router.post('/notes', (req,res)=>{
    console.log('notes POST sucess');
    //receive a new note to save on the req body, add it to the db.json file, and then return the new note to the client
    //each notes will need a unique id
});

router.delete('/notes/:id', (req,res)=>{
    console.log('notes DELETE success');
    //should receive a query parameter that contains the id of a note to delete
    //will need to read all ntoes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file
})



module.exports = router;