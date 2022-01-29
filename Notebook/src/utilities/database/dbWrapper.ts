import * as dbHandle from './dbHandler';

export const create = (model:any, query:any) => {
    try {
        return dbHandle.createRecord(model, query);
    } catch(err) {
        throw err;
    }
}

export const read = (model:any, query:any) => {
    try {
        return dbHandle.findRecord(model, query);
    } catch(err) {
        throw err;
    }
}

export const readAll = (model:any) => {
    try {
        return dbHandle.findAllRecord(model);
    } catch(err) {
        throw err;
    }
}

export const update = (model:any, query:any, payload:any) => {
    try {
        return dbHandle.updateRecordByQuery(model, query, payload);
    } catch(err) {
        throw err;
    }
}

export const updateAttribute = (model:any, query:any, payload:any) => {
    try {
        return dbHandle.pushAttributeInRecord(model, query, payload);
    } catch(err)  {
        throw err;
    }
}

export const updateSubAttribute = (model:any, query:any, payload:any) => {
    try {
        return dbHandle.updateSubDocsInRecord(model, query, payload);
    } catch(err) {
        throw err;
    }
}

export const remove = (model:any, query:any) => {
    try {   
        return dbHandle.deleteRecord(model, query);
    } catch(err) {
        throw err;
    }
}

export const removeAll = (model:any) => {
    try {
        return dbHandle.deleteAllRecord(model);
    } catch(err) {
        throw err;
    }
}

export const removeAttribute = (model:any, query:any, payload:any) => {
    try {
        return dbHandle.removeSubDocsFromRecord(model, query, payload);
    } catch(err) {
        throw err;
    }
}