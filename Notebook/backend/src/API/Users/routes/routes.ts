import { createUser, readOneUser, getUsers, updateOne, deleteAll, deleteOneUser } from "../controller/controller";

import * as Express from 'express';
import { Router } from "express";


const router:Router = Express.Router();

router.post('/new', createUser); //Working
router.get('/getUsers', getUsers); //working
router.get('/getUser/:userName', readOneUser); //Working
router.put('/update/:userName', updateOne); //Working
router.delete('/delete/:userName', deleteOneUser); //Working
router.delete('/deleteAll', deleteAll); //Working

export default router