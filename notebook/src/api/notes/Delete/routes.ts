const express = require('express');
const router = express.Router();

const Note = require('../Create/model');

router.delete("/:notesId", async (req:any, res:any) => {
    try {
        const noteId = req.params.noteId
        const deleteNote = await Note.deleteOne({_id:noteId});
        res.json(deleteNote);
    } catch(err) {
        if(err) {
            console.warn({msg:err});
        }
    }
});

module.exports = router;

export {};