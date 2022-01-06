const express = require('express')
const config = require('./config/config')
const jwt = require('jsonwebtoken')

const PORT = config.PORT

const app = express()

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/api', (req, res) => {
    let JWT_SECRET_KEY = config.JWT_SECRET_KEY;
    let JWT_HEADER_KEY = config.JWT_HEADER_KEY;

    try {
        const apiToken = req.header(JWT_HEADER_KEY);

        const verified = jwt.verify(apiToken, JWT_SECRET_KEY);
        if(!verified){
            return res.status(404).send('Not Verified');
        } else {
            return res.status(200).send('Verified');
        }
    } catch(err) {
        return res.status(404).send(err);
    }
})

app.post('/api/generateToken', (req, res) => {
    let JWT_SECRET_KEY = config.JWT_SECRET_KEY;
    let userData = {
        userName : "Shree Dhushandhan",
        userId : 156
    }

    const tokenGen = jwt.sign(userData, JWT_SECRET_KEY);

    res.send(tokenGen);
})



app.listen(PORT, (err) => {
    if(!err) {
        console.log(`Server started at ${PORT}`)
    }
})