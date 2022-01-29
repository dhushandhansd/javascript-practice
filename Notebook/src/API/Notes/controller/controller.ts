import NotesModel from "../notes"
import {Request,Response} from 'express';
import * as dbManager from '../../../utilities/database/dbWrapper'; 


export const createNotes = async (req:Request, res:Response) => {
    const {
        title,
        userId,
        tags,
        content,
        noteBookId,
        isActive
    } = req.body;

    const notePayload = {
        title,
        userId,
        tags,
        content,
        noteBookId,
        isActive
    }

    try {
        const resp = await dbManager.create(NotesModel, notePayload);
        if(!resp) {
            res
            .status(400)
            .send({msg:'Note not Created'});
        }
        res.status(200).send({msg:'Notes Created'});
    } catch(err) {
        console.log({msg:err})
    }
}

export const readOneNote = async (req:Request, res:Response) => {
    try {
        const {noteBookId} = req.params;
        const resp = await dbManager.read(NotesModel, {noteBookId:noteBookId});
        if(!resp) {
            res
            .status(400)
            .send({msg:"Notes not found"});
        }
        res.status(200).send({msg:resp});
    } catch(err) {
        throw err;
    }
}


export const readAllNote = async (req:Request, res:Response) => {
    try {
        const resp = await dbManager.readAll(NotesModel);
        if(!resp) {
            res
            .status(400)
            .send({msg:"Not able to Get All Notes"});
        }
        res.status(200).send({msg:resp});
    } catch(err) {
        throw err;
    }
}

export const updateNote = async (req:Request, res:Response) => {
    try {
        const {payload} = req.body;
        const {noteBookId} = req.params;
        const resp = await dbManager.update(NotesModel, {noteBookId:noteBookId}, payload);
        if(!resp) {
            res
            .status(400)
            .send({msg:"Not able to update Note"});
            console.log(resp)
        }
        res.status(200).send({msg:'Notes updated'})
    } catch(err) {
        throw err;
    }
}

export const deleteNote = async (req:Request, res:Response) => {
    try {
        const {noteBookId} = req.params;

        const resp = await dbManager.remove(NotesModel, {noteBookId:noteBookId});

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

export const deleteAll = async (req:Request, res:Response) => {
    try {
        const resp = await dbManager.removeAll(NotesModel);

        if(!resp) {
            res.status(400).send({msg:"Note able to Delete All Notes"});
        }
        res.status(200).send({msg:resp});
    } catch(err) {
        throw err;
    }
}