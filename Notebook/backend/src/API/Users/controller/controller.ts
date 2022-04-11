import UserModel from "../users";
import { Request, Response} from 'express';


export const createUser = async (req:Request, res:Response) => {
    // const {
    //     userName,
    //     name,
    //     email,
    //     jobDetails:{
    //         title,
    //         designation,
    //         organization,
    //         isWorking
    //     },
    //     contactNumber,
    //     dob,
    //     gender,
    //     password,
    //     isActive,
    //     isVerified,
    //     roles:[{
    //         r_id,
    //         r_idActive
    //     }],
    //     lastActive
    // } = req.body;

    const {
        userName,
        name,
        email,
        contactNumber,
        password,
        isActive,
        isVerified
    } = req.body;

    const userPayload = {
        userName,
        name,
        email,
        contactNumber,
        password,
        isActive,
        isVerified
    }

    // const userPayload = {
    //     userName,
    //     name,
    //     email,
    //     jobDetails:{
    //         title,
    //         designation,
    //         organization,
    //         isWorking
    //     },
    //     contactNumber,
    //     dob,
    //     gender,
    //     password,
    //     isActive,
    //     isVerified,
    //     roles:[{
    //         r_id,
    //         r_idActive
    //     }],
    //     lastActive
    // }

    // {
    //     "userName":"dhushandhan_sd",
    //     "name":"Shree Dhushandhan",
    //     "email":"dhushandhan.sd@gmail.com",
    //     "jobDetails":{
    //         "title":"CEO",
    //         "designation":"CEO",
    //         "organization":"UK Groups",
    //         "isWorking":true
    //     },
    //     "contactNumber": "9087911247",
    //     "dob":"18/05/2001",
    //     "gender":"Male",
    //     "password":"qwejipiqjw",
    //     "isActive": true,
    //     "isVerified": true,
    //     "lastActive":"Today"
    // }

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


export const readOneUser = async (req:Request, res:Response) => {
    try {
        const {userName} = (req.params);
        console.log('@SD LN106', userName);
        const resp = await UserModel.findOne({userName:userName});
        if(!resp) {
            res.send({msg:"User not Found"});
        }
        res.send({resp})
    } catch(err) {
        console.log(err);
    }
}


export const getUsers = async (req:Request, res:Response) => {
    try {
        const resp = await UserModel.find();
        if(!resp || resp == null) {
            res.send({msg:"No Users Found"});
        }
        res.send({resp});
    } catch(err) {
        console.log(err);
    }
}


export const updateOne = async (req:Request, res:Response) => {
    try {
        const payload = req.body;
        const {userName} = (req.params);
        console.log("@SD LN134 ", userName, payload);
        const resp = await UserModel.findOneAndUpdate(
            {userName:userName},{$set: payload});
        if(!resp) {
            res.send({msg:"Not Able to Update User"});
        }
        res.send({msg:"User Updated"});
    } catch(err) {
        console.log(err);
    }
}

export const deleteAll = async (req:Request, res:Response) => {
    try {
        const resp = await UserModel.deleteMany();
        if(!resp) {
            res.send({msg:"Not able to Delete All Users"});
        }
        res.send({msg:"All Users Deleted"});
    } catch(err) {
        console.log(err);
    }
}


export const deleteOneUser = async(req:Request, res:Response) => {
    try {
        const resp = await UserModel.deleteOne({userName:req.params.userName});
        if(!resp) {
            res.send({msg:"Not able to remove User"});
        }
        res.send({msg:"User Removed"});
    } catch (err) {
        console.log(err);
    }
}

