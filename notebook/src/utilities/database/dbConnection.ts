const mongoose = require('mongoose');

export function init() {
    mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false");
    console.log('DB Connected');
}

mongoose.connection.on('error', (err:any) => {
    console.warn('DB Connection Error', err);
})

mongoose.connection.on('disconnected', () => {
    console.log('DB Connection Disconnected');
})