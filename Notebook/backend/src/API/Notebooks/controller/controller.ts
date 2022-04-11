import NoteBookModel from "../notes"
import {Request,Response} from 'express';
import * as dbManager from '../../../utilities/database/dbWrapper'; 


export const createNotebook = async (req:Request, res:Response) => {
    const {
        title,
        description,
        userId,
    } = req.body;

    const notePayload = {
        title,
        description,
        userId
    }

    try {
        const resp = await dbManager.create(NoteBookModel, notePayload);
        if(!resp) {
            res
            .status(400)
            .send({msg:'Notbook not Created'});
        }
        res.status(200).send({msg:'Notebook Created'});
    } catch(err) {
        console.log({msg:err})
    }
}

export const readOneNotebook = async (req:Request, res:Response) => {
    try {
        const {noteBookId} = req.params;
        const resp = await dbManager.read(NoteBookModel, {noteBookId:noteBookId});
        if(!resp) {
            res
            .status(400)
            .send({msg:"Notes not found"});
        }
        res.status(200).send({resp});
    } catch(err) {
        throw err;
    }
}


export const readAllNotebook = async (req:Request, res:Response) => {
    try {
        const resp = await dbManager.readAll(NoteBookModel);
        if(!resp) {
            res
            .status(400)
            .send({msg:"Not able to Get All Notes"});
        }
        res.status(200).send({resp});
    } catch(err) {
        throw err;
    }
}

export const updateNotebook = async (req:Request, res:Response) => {
    try {
        const {payload} = req.body;
        const {noteBookId} = req.params;
        const resp = await dbManager.update(NoteBookModel, {noteBookId:noteBookId}, payload);
        if(!resp) {
            res
            .status(400)
            .send({msg:"Not able to update Note"});
        }
        res.status(200).send({msg:'Notes updated'})
    } catch(err) {
        throw err;
    }
}

export const deleteNotebook = async (req:Request, res:Response) => {
    try {
        const {noteBookId} = req.params;

        const resp = await dbManager.remove(NoteBookModel, {noteBookId:noteBookId});

        if(!resp ){
            res
            .status(400)
            .send({msg:"Not able to delete Notes"})
        }

        res.status(200).send({msg:resp});
    } catch(err) {
        throw err;
    }
}

export const deleteAllNotebooks = async (req:Request, res:Response) => {
    try {
        const resp = await dbManager.removeAll(NoteBookModel);

        if(!resp) {
            res.status(400).send({msg:"Note able to Delete All Notes"});
        }
        res.status(200).send({msg:resp});
    } catch(err) {
        throw err;
    }
}