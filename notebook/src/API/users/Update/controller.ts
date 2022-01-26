import { usersSchema, UserModel } from "../users";
import {Request, Response} from 'express';

export const updateOne = async (req:Request, res:Response) => {
    try {
        const resp = await UserModel.updateOne({userName:req.params.fromName},{userName:req.params.toName});
        if(!resp) {
            res.send({msg:"Not Able to Update User"});
        }
        res.send({msg:"User Updated"});
    } catch(err) {
        console.log(err);
    }
}
