import { noteBookModel, noteBookSchema } from '../notebooks';
import {Request, Response} from 'express';

export const createNoteBook = async (req:Request, res:Response) => {

    const {
        title,
        description,
        userId
    } = req.body;

    const notebookPayload = {
        title,
        description,
        userId
    };

    try {
        const resp = await noteBookModel.create(notebookPayload);
        if(!resp) {
            res.send({msg:"Notebook not Created"});
        }
        res.send({msg:"Notebook not Created"});
    } catch(err) {
        console.log(err);
    }
}

export default createNoteBook;