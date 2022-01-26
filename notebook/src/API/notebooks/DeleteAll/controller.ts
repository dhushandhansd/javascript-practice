import {noteBookModel} from '../notebooks';
import {Request, Response} from 'express';

export const deleteNoteBooks = async (req:Request,res:Response) => {
    try {
        const resp = await noteBookModel.remove();
        if(!resp){
            res.send({message:"Not able to delete all notebooks"})
        }
        res.send({message:"All Notebooks deleted"})
    } catch(err) {
        console.log(err);
    }
}

export default deleteNoteBooks;