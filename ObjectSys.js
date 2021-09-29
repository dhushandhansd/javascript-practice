const trip = {
  passengerName : "Shree Dhushandhan",
  driverName : "Raju Baai",
  fare : "90",
  location : {
    from : "Gandhipuram",
    to : "Brookfields"
  },
  otp : 7820,
  paymentMode : "GPay"
}

const tripHandler = {
  set : (obj, prop, val) => {
    Object.freeze(obj)
    console.log("EL16","Trying to Add Value", prop, "is restricted at", Date.now())
  },

  get : (obj, prop) => {
    return prop in obj ? obj[prop] : "Value not Available"
  },

  delete : (obj, prop) => {
    Object.seal(obj)
    console.log("")
  },

}

const tripProxy = new Proxy(trip, tripHandler)

tripProxy.paymentMode = "Cash"

console.log(tripProxy.passengerName)