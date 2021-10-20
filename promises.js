/**
 * API Fetch with Promises
 * 1. Create a promise and fetch the API
 * 2. If the API Fetch is success, print the response with Promsie Resolver
 * 3. If the API Fetch is failed, print the response with Promise Reject.
 */

const fetchPromsie = () => {
  console.log('API Fetch Started')
  new Promise((response, reject) => {
    var randomNumber = Math.floor(Math.random() * 10)
    fetch(`https://swapi.dev/api/starships/${randomNumber}`)
    .then((res) => {
      res.json()
    })
    .then((data) => {
      console.log(data)
    })
  })
}
var randomNumber = Math.floor(Math.random() * 10)
fetch(`https://swapi.dev/api/planets/${randomNumber}`)
.then(res => {
  res.json()
})
.then(data => {
  console.log(data.name)
})