// import mongoose from "mongoose";

// export function init() {
//   mongoose.connect(
//     "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
//   );
//   console.log("DB Connected");
// }

// mongoose.connection.on("error", (err: any) => {
//   console.warn("DB Connection Error", err);
// });

// mongoose.connection.on("disconnected", () => {
//   console.log("DB Connection Disconnected");
// });

// export default init


const Mongoose = require("mongoose");

export function init() {
  Mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false", (err:any) => {
    if(err) {
      console.log(err)
    }
    console.log("DB Connected and Working");

  })
}

export default init