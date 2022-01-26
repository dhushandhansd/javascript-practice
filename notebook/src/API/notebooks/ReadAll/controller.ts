import {noteBookModel} from '../notebooks';
import {Request, Response} from 'express';

export const getNoteBooks = async (req:Request, res:Response) => {
    try {
        const response = await noteBookModel.find();
        if(!response) {
            res.send({msg:"Notebook Not Found"});
        }
        res.send({msg:response});
    } catch(err) {
        console.log(err);
    }
}

export default getNoteBooks;