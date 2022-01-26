import {noteBookModel} from '../notebooks';
import {Request, Response} from 'express';

export const updateNotebook = async (req:Request, res:Response) => {
    try {
        const response = await noteBookModel.updateOne({title:req.params.updateFrom},{title:req.params.updateTo});
        if(!response) {
            res.send({msg:"Not able to Update Notebook"});
        }
        res.send({msg:response});
    } catch(err) {
        console.log(err);
    }
}

export default updateNotebook;