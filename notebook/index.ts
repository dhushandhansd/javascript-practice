import express from 'express';
import * as db from './src/utilities/database/dbConnection';
import { User } from './src/API/users/index';
import { Notebook } from './src/API/notebooks';
const bodyParser = require('body-parser');

//Database
db.init()

//Express Server
const app = express()
const port = 5000;
app.use(bodyParser.json())

//Express Middleware and Routes
app.use('/user',User.CreateUser);
app.use('/notebook', Notebook.createNoteBook);

app.get('/', (req:any, res:any) => {
    res.send('NoteBook App');
})

app.listen(port,() => {
    console.log(`Server running at ${port}`)
})
