const express = require('express');
const router = express.Router();

const Note = require('./model');


//Creating Notes
router.post('/create', async (req:any, res:any) => {

    const note = new Note({
        notes: req.body.notes,
        sign: req.body.sign
    });

    try {
        const createNote = await note.save();
        res.json(createNote);
    } catch(err) {
        if(err) {
            console.warn(err)
        } else {
            console.log('Notes Saved');
        }
    }
})

module.exports = router;
export {};