import { usersSchema, UserModel } from "../users";
import { Request, Response} from 'express';
export const createUser = async (req:Request, res:Response) => {
    const {
        userName,
        name,
        email,
        jobDetails:{
            title,
            designation,
            organization,
            isWorking
        },
        contactNumber,
        dob,
        gender,
        password,
        isActive,
        isVerified,
        roles:[{
            r_id,
            r_idActive
        }],
        lastActive
    } = req.body;

    const userPayload = {
        userName,
        name,
        email,
        jobDetails:{
            title,
            designation,
            organization,
            isWorking
        },
        contactNumber,
        dob,
        gender,
        password,
        isActive,
        isVerified,
        roles:[{
            r_id,
            r_idActive
        }],
        lastActive
    }

    try {
        const response = await UserModel.create(userPayload);
        if(!response) {
            res.send({msg:"User not created"});
        }
        res.send({msg:"User Created successfully"});
    } catch(err) {
        console.log(err)
    }

    

}

export default createUser;