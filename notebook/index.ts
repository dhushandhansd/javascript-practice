const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv/config");
const mongoose = require('mongoose');


//DB Connection
mongoose.connect(process.env.DB_CONNECTION, (err: any) => {
    if (err) {
      console.warn("DB Error");
    } else {
      console.log("DB Connected");
    }
  });







//Basic Routes and Middleware
app.use(bodyParser.json());

app.listen(5000, () => {
  console.log("Server running on 5000");
});

app.get("/", (req: any, res: any) => {
  res.send("Home Page");
});




//Routes
//Creation Route
const createRoute = require("./src/api/notes/Create/routes.ts");
app.use("/create", createRoute);

//Read Route
const readRoute = require("./src/api/notes/ReadAll/routes");
app.use("/mynotes", readRoute);

//Delete Route
const deleteRoute = require("./src/api/notes/Delete/routes");
app.use("/deletenote", deleteRoute);
















/**
 * API Creation Flow
 *
 * 1. Create CRUD operation Structure
 * 2. For Each Operation
 *    1. Create Model (Structure) called Schema
 *    2. Create Each Routes
 *    3. Get the Data from the Header or Body and parse it to Operation Object
 *    4. Save the Note as a Promise and return the response to body.
 *    5. Use the Operation Routes to the Main Route.
 * 3. Connect to DB
 * 4. Execute Each Operations
 */
