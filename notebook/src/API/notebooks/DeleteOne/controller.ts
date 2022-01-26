import {noteBookModel} from '../notebooks';
import {Request, Response} from 'express';

export const deleteNoteBook = async (req:Request,res:Response) => {
    try {
        const resp = await noteBookModel.remove({title:req.params.title});
        if(!resp){
            res.send({message:"Not able to delete notebook"})
        }
        res.send({message:"Notebook deleted"})
    } catch(err) {
        console.log(err);
    }
}

export default deleteNoteBook;