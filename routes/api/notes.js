const router = require('express').Router();
const createNew = require('../../helpers/createNew.js');
const deleteNote = require('../../helpers/deleteNote.js');

router.get('/notes', (req,res)=>{
    console.log('notes GET success');
    //read db.json file and return all saved notes as json
});

router.post('/notes', (req,res)=>{
    console.log('notes POST sucess');
    //receive a new note to save on the req body, add it to the db.json file, and then return the new note to the client
    //each notes will need a unique id
})



module.exports = router;