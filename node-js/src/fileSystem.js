const fs = require("fs");
const events = require('events');
const https = require('https');
const EventEmitter = require("events");
//File Read System

//ReadFile
fs.readFile(`${__dirname}/cholan.txt`, 'utf-8', (err, data) => {
  if(err) {
    console.log("File Read Error", err);
    return;
  }

  console.log(data.toString())
})

//ReadFile Synchronous
try {
  const fileData = fs.readFileSync(`${__dirname}/cholan.txt`, 'utf-8');
  console.log(fileData);
} catch(err) {
  console.log(err);
}


// API CALL AND EVENTS

function starWars() {
  https.get('https://swapi.dev/api/people/5/', (res) => {
    let data = "";

    res.on('data', (chunk) => {
      data += chunk;
    })

    res.on('end', () => {
      console.log(JSON.parse(data))
    })
  }).on('error', (err) => {
    console.log(err.message)
  })
}

const eventEmiter = new EventEmitter();

eventEmiter.on('ApiEvent', starWars);

const shree = true;

if(shree === true) {
  eventEmiter.emit('ApiEvent');
}