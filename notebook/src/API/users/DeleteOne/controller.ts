import { usersSchema, UserModel } from "../users";
import {Request, Response} from 'express';


export const deleteOneUser = async(req:Request, res:Response) => {
    try {
        const resp = await UserModel.remove({userName:req.params.userName});
        if(!resp) {
            res.send({msg:"Not able to remove User"});
        }
        res.send({msg:"User Removed"});
    } catch (err) {
        console.log(err);
    }
}

export default deleteOneUser;