const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
    notes : {type:String, required:true},
    sign : {type:String, required:true},
}, {timestamps:true});

module.exports  = mongoose.model("Notes", notesSchema);


export {};