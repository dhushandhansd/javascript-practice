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
    if(Object.isFrozen(obj)) {
      console.group("EL16 - Trying to Update Value")
      console.log(obj.constructor.name , prop, "is restricted from Updating")
      var timestamp = Date.now()
      console.log("Timestamp", timestamp)
      localStorage.setItem("Object", obj.constructor.name)
      localStorage.setItem("Action", "update")
      localStorage.setItem("TimeStamp", timestamp)
      console.groupEnd()
    } else {
      console.log("Object Not Frozen")
    }
    
  },

  get : (obj, prop) => {
    if(prop in obj) {
      return obj[prop]
    } else {
      console.group("EL38 - Trying to Read Value not Available")
      console.log("Timestamp", Date.now())
      var timestamp = Date.now()
      localStorage.setItem("Object", obj.constructor.name)
      localStorage.setItem("Action", "Read")
      localStorage.setItem("TimeStamp", timestamp)
      console.groupEnd()
    }
  },

  deleteProperty(obj, prop, receiver){
    // console.log("Delete prop", Object.isSealed(obj), prop in obj, prop, obj)
    if(Object.isSealed(obj) && prop in obj) {
      console.group("EL60 Attempting to Delete")
      var timestamp = Date.now()
      localStorage.setItem("Object", obj.constructor.name)
      localStorage.setItem("Action", "delete")
      localStorage.setItem("TimeStamp", timestamp)
      console.log("EL60", prop, "is Sealed and cannot be deleted")
      console.groupEnd()
    }
  },

}

//Proxy Setting
const tripProxy = new Proxy(trip, tripHandler)

//Update
Object.freeze(tripProxy)
tripProxy.paymentMode = "Cash"

//Read
console.log(tripProxy.paymentMode)

//Delete
Object.seal(tripProxy)
delete tripProxy["location"]
console.log(tripProxy["location"])

