/**
 * @description
 * Create an object and apply object immutable properties over them . 
 * So if someone try to perform create , update ,  delete, the following action should get logged.
 * For example timestamp, action and object name should get logged on 
 * localstorage or though memoization.
 * Hint : You need to use Object Prototype method & override few methods
 */


// Object
const trip = {
  passengerName : "Shree Dhushandhan",
  driverName : "Raju Baai",
  fare : "90",
  location : {
    from : "Gandhipuram",
    to : "Brookfields"
  },
  otp : 7820,
}

// Object Handler
const tripHandler = {
  set : (obj, prop, val) => {
    Object.freeze(obj)
    console.group("Create Function")
    console.log("EL16 - Trying to Add Value")
    console.log(obj.constructor.name , prop, "is restricted from Updating")
    console.log("Timestamp", Date.now())
  },

  get : (obj, prop) => {
    if(prop in obj) {
      return obj[prop]
    } else {
      console.group("Read Function")
      console.log("EL38 - Value not Available")
      console.log("Timestamp", Date.now())
    }
  },

  delete : (obj, prop) => {
    Object.seal(obj)
    if(prop in obj) {
      console.log("EL46", prop, "attempted to be deleted")
    } else {
      console.log("EL48 - Value not available")
    }
  },

}

//Proxy Setting
const tripProxy = new Proxy(trip, tripHandler)

//Update
tripProxy.paymentMode = "Cash"

//Read
tripProxy.paymentMode

//Delete
delete tripProxy.location
console.log(tripProxy)