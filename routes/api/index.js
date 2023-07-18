const router = require('express').Router();
const notesRoutes = require('./notes.js');

// sets up notes router
router.use('/notes', notesRoutes);


module.exports = router;