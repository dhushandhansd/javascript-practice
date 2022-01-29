export const createRecord = async (model:any, payload:any) => {
  try {
    const createpayload = new model(payload);
    const createResp = await createpayload.save();
    return createResp;
  } catch (err) {
    throw err;
  }
};

export const findRecord = async (model:any, query:any) => {
  try {
    const readResp = await model.findOne(query);
    return readResp;
  } catch (err) {
    throw err;
  }
};

export const findAllRecord = async (model:any) => {
  try {
    const resp = await model.find();
    return resp;
  } catch (error) {
    throw error;
  }
};

export const updateRecordByQuery = async (model:any, query:any, payload:any) => {
  try {
    const resp = await model.findOneAndUpdate(
      query,
      { $set: payload }
    );
    return resp;
  } catch (error) {
    throw error;
  }
};

export const pushAttributeInRecord = async (model:any, query:any, payload:any) => {
  try {
    const resp = await model.findOneAndUpdate(
      query,
      { $push: payload }
    );
    return resp;
  } catch (error) {
    throw error;
  }
};

export const removeSubDocsFromRecord = async (model:any, query:any, payload:any) => {
  try {
    const resp = await model.findOneAndUpdate(query, { $pull: payload });
    return resp;
  } catch (error) {
    throw error;
  }
};

export const updateSubDocsInRecord = async (model:any, query:any, payload:any) => {
  try {
    const resp = await model.findOneAndUpdate(query, payload);
    return resp;
  } catch (error) {
    throw error;
  }
};

export const deleteRecord = async (model:any, query:any) => {
  try {
    const resp = await model.deleteOne(query);
    return resp;
  } catch (error) {
    throw error;
  }
};


export const deleteAllRecord = async (model:any) => {
  try {
    const resp = await model.deleteMany();
    return resp;
  } catch(err) {
    throw err;
  }
}