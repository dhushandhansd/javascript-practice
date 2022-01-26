import {noteBookModel} from '../notebooks';
import {Request, Response} from 'express';

export const updateNotebooks = async (req:Request, res:Response) => {
    try {
        const response = await noteBookModel.updateMany({title:req.params.updateFrom},{title:req.params.updateTo});
        if(!response) {
            res.send({msg:"Not able to Update All Notebooks"});
        }
        res.send({msg:response});
    } catch(err) {
        console.log(err);
    }
}

export default updateNotebooks;