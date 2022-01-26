import {noteBookModel} from '../notebooks';
import {Request, Response} from 'express';

export const getNoteBook = async (req:Request, res:Response) => {
    try {
        const response = await noteBookModel.find({title:req.params.title});
        if(!response) {
            res.send({msg:"Notebook Not Found"});
        }
        res.send({msg:response});
    } catch(err) {
        console.log(err);
    }
}

export default getNoteBook;