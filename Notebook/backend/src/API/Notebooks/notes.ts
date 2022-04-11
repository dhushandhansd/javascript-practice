import * as Mongoose from "mongoose";

const noteBookSchema = new Mongoose.Schema({
    title: { type: String, required: true },
    description : {type:String, required:true},
    userId: { type: String, required: true },
    },
    {
        timestamps : true
    }
);

const NoteBookModel = Mongoose.model('Notebook', noteBookSchema);

export default NoteBookModel;
