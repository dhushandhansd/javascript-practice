/**
 * API Fetch with Promises
 * 1. Create a promise and fetch the API
 * 2. If the API Fetch is success, print the response with Promsie Resolver
 * 3. If the API Fetch is failed, print the response with Promise Reject.
 */


const fetchPromsie = () => {
  console.log('API Fetch Started')
  new Promise((response, reject) => {
    var randomNumber = Math.floor(Math.random() * 5)
    fetch(`https://swapi.dev/api/people/${randomNumber}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      response('API Fetch Success')
    })
    .catch((err) => {
      console.log(err)
      reject('API Fetch Failed')
    })
  })
}

const timeTraveller = new Promise((response, reject) => {
    setInterval(() => {
      console.log(Math.floor(Math.random() * 100))
    },1500)
  })
timeTraveller()

// Resolves or Rejects all the promises at a time

Promise.all([fetchPromsie, timeTraveller])
.then((outputs) => {
  console.log(outputs)
})

// Resolves or Rejects randomly

Promise.any([fetchPromsie, timeTraveller])
.then((outputs) => {
  console.log(outputs)
})

// Returns values after all the Promises either Resolves or Rejects

Promise.allSettled([fetchPromsie, timeTraveller])
.then((outputs) => {
  console.log(outputs)
})
