/**
 * Jobs to be Done
 * 
 * Description
 * Try & implement JavaScript Object immutable properties 
 * & start restriicting user to update, 
 * delete & modify properties of an object separately.
 * 
 * Steps:
 * 1. Create an Object called trip and props to it..
 * 2. try to Read the trip Object and log it.
 * 3. Restricting the Object from Adding more by using preventExtension
 * 4. Restricting the Object from Deleting and adding by using seal
 * 5. Restricting the Object from Deleting by using freeze
 */

const trip = {
  passengerName : "Shree Dhushandhan",
  driverName : "Raju Baai",
  fare : "90",
  location : {
    from : "Gandhipuram",
    to : "Brookfields"
  },
  otp : 7820
}

// Trying to Read the Property from Object
console.log(trip) // Output : {passengerName: 'Shree Dhushandhan', driverName: 'Shree Dhushandhan', fare: '90', location: {…}, otp: 7820}



//Restricting the Object from adding new Objects
Object.preventExtensions(trip)
// Trying to Add New Data
trip.paymentMode = 'Cash'
console.log(trip?.paymentMode) // Output : undefined



//Restricting the Object from Deleting and Adding Props
Object.seal(trip)
//Deleting a Prop
delete trip.driverName
console.log(trip?.driverName) // Output : Raju Baai



//Restricting Updates
Object.freeze(trip)
//Trying to Delete Data
trip.driverName = 'Raju Bai'
console.log(trip?.driverName) // Output : Raju Baai

