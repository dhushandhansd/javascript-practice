import { Schema } from "mongoose";

const netflixSchema = new Schema({
    name: {type : String, required:true},
    year: {type : Number, required:true},
    duration : {type : Number, required: true},
    rating : {type : Number, required : false},
    genre : {type : String, required : true},
    description : {type : String, required: true},
    cast : {
        director : {type : String, required : true},
        starring : {type : String, required:true, text:true},
    }
}, {timestamps:true});

/**
 * Name
 * Year
 * Duration
 * Rating
 * Genre
 * Description
 * Cast
 * Director
 * Starring
 */