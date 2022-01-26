import {Request, Response} from 'express';
import { UserModel, usersSchema  } from '../users';

export const readOneUser = async (req:Request, res:Response) => {
    try {
        const resp = await UserModel.find({userName:req.params.userName});
        if(!resp) {
            res.send({msg:"User not Found"});
        }
        res.send({msg:resp})
    } catch(err) {
        console.log(err);
    }
}

export default readOneUser;