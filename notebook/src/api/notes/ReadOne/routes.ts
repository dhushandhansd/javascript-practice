const express = require('express');
const router = express.Router();

const Note = require('../Create/model');

router.get("/:noteId", async (req:any, res:any) => {
    try {
        const noteId = req.params.noteId;
        const readOneNote = await Note.findById(noteId);
        res.json(readOneNote)
    } catch(err) {
        if(err) {
            console.warn({msg: err})
        }
    }
})

module.exports = router;

export {};