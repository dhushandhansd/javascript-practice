import {trip, tripHandler, tripProxy} from './ObjectSys'

let atmSession = {
  timestamp : Date.now(),
  actions : [],

}

const atmSessionHandler = {
  get : (obj, prop) => {

  },

  set : (obj ,prop, val) => {

  },

  deleteProperty (obj, prop) {

  }
}

const trip = trip

console.log(this.trip)

const atmProxy = new Proxy(atmSession, atmSessionHandler)

Object.freeze(atmProxy)

console.log(Object.isFrozen(atmProxy))