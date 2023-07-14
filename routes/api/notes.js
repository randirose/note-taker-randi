const router = require('express').Router();
// const createNote = require('../../helpers/createNote.js');
// const deleteNote = require('../../helpers/deleteNote.js');
let notesArr = require('../../db/db.json');

router.get('/', (req,res)=>{
    res.json('notes GET success');
    readFromFile('../../db/db.json')
    .then((data) =>{
        res.json(JSON.parse(data))
    });
});

router.post('/', (req,res)=>{
    res.json('notes POST sucess');
    //destructuring assignment for the items in req.body
    const {title, text, id} = req.body;
    //if all required props are present
    if(title && text){
        const newNote = {
            title,
            text,
            id: uuid(),
        }

        createNote(newNote, notesArr);
    

    const response = {
        status: 'success',
        body: newNote
    }
    res.json(response);
} else {
    res.json('error in posting new note')
}
    //receive a new note to save on the req body, add it to the db.json file, and then return the new note to the client
    //each notes will need a unique id
});

router.delete('/:id', (req,res)=>{
    res.json('notes DELETE success');
    //should receive a query parameter that contains the id of a note to delete
    //will need to read all ntoes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file
})



module.exports = router;