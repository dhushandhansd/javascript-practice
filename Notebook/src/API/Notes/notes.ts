import * as Mongoose from "mongoose";

const notesSchema = new Mongoose.Schema({
    title: { type: String, required: true },
    userId: { type: String, required: true },
    tags: [String],
    content: { type: String, required: false, text: true },
    noteBookId: { type: String, required: false },
    isActive: { type: Boolean, required: false, default: true },
    },
    {
        timestamps : true
    }
);

const NotesModel = Mongoose.model('Note', notesSchema);

export default NotesModel;
