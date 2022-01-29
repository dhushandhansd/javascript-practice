import Users from './API/Users';
import Notes from './API/Notes';
import express from 'express';
import init from './utilities/database/dbConnectivity';
import bodyParser from 'body-parser';


//DB
init();

const app = express();
const port = 5000;

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))


//API
app.use('/user', Users.Users);
app.use('/notes', Notes.Notes);

//Basic Routes
app.get('/', (req:any, res:any) => {
    res.send('Users Page')
})


//Server PORT
app.listen(port, () => {
    console.log(`Server running at ${port}`)
})
