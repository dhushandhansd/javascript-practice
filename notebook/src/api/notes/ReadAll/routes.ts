const express = require('express');
const router = express.Router();


const Note = require('../../notes/Create/model');

//Reading Notes
router.get('/', async (req:any, res:any) => {
    try {
        const getAllNotes = await Note.find();
        res.json(getAllNotes);
    } catch(err) {
        res.json({msg:err})
    }
})

module.exports = router;


export {};