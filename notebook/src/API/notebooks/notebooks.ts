import * as Mongoose from 'mongoose';

export const noteBookSchema = new Mongoose.Schema({
    title: {type : String, required:true},
    description : {type : String, required:true},
    userId : {type:String, required:true}
},{timestamps:true});

export const noteBookModel = Mongoose.model("Notebook", noteBookSchema);
