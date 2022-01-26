import { usersSchema, UserModel } from "../users";
import {Request, Response} from 'express';

export const deleteAll = async (req:Request, res:Response) => {
    try {
        const resp = await UserModel.remove();
        if(!resp) {
            res.send({msg:"Not able to Delete All Users"});
        }
        res.send({msg:"All Users Deleted"});
    } catch(err) {
        console.log(err);
    }
}

export default deleteAll;