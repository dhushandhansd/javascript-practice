import { usersSchema, UserModel } from "../users";
import {Request, Response} from 'express';
import { exitProcess } from "yargs";

export const getUsers = async (req:Request, res:Response) => {
    try {
        const response = await UserModel.find();
        if(!response) {
            res.send({msg:"User Not Found"});
        }
        res.send({msg:response});
    } catch(err) {
        console.log(err);
    }
}

export default getUsers;