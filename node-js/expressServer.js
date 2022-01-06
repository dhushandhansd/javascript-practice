const express = require('express')
const fs = require('fs')
const config = require('./config/config')

const app = express()
const PORT = config.PORT

//Request Handler
const getRoute = (req) => {
  const route = req.route ? req.route.path : '';
  const baseUrl = req.baseUrl ? req.baseUrl : ''
  return route ? `${baseUrl === '/' ? '' : baseUrl}${route}` : 'unknown route'
}

const FILE_PATH = 'stats.json'

// read json object from file
const readStats = () => {
  let result = {}
  try {
      result = JSON.parse(fs.readFileSync(FILE_PATH))
  } catch (err) {
      console.error(err)
  }
  return result
}

// dump json object to file
const dumpStats = (stats) => {
  try {
      fs.writeFileSync(FILE_PATH, JSON.stringify(stats), { flag: 'w+' })
  } catch (err) {
      console.error(err)
  }
}

//Middleware
app.use((req, res, next) => {
  res.on('finish', () => {
    const stats = readStats()
    const event = `${req.method} ${getRoute(req)} ${res.statusCode}`
    stats[event] = stats[event] ? stats[event] + 1 : 1
    dumpStats(stats)
  })
  next();
})

//Routes
app.get("/", (req, res) => {
  console.log(req.route.path);
  return res.send("Home Page");
})

app.get('/api', (req, res) => {
  console.log(req.baseUrl);
  return res.send("API Hitted");
})


// app.get('/author', (req, res) => {
//   const resp = {
//     author: "Shree Dhushandhan",
//     Job: "CEO",
//   }
//   res.json(resp)
// })

// app.get('/login', (req, res) => {
//   let userName = req.query.user;
//   let job = req.query.job;

//   if(userName == "ShreeDhushandhan" && job == "CEO") {
//     res.send("User Creation Success");
//   } else {
//     res.send("User Creation Failed");
//   }
// })

// app.get('/god', (req, res) => {
//   res.send("God");
// })

// app.delete('/deleteUser', (req, res) => {
//   let name = req.query.name;
//   let userId = req.query.userId;

//   if(name != null && name != "" && userId != null && userId != 0) {
//     res.send("User Deletion Success")
//   } else {
//     res.send("User Deletion Failed")
//   }
// })


//Server Listener
app.listen(PORT, () => {
  console.log(`Server started in PORT ${PORT}`)
})