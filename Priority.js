// var number1 = 89
// var number2 = '812'

// console.log(number1 + number2 )
// setTimeout(()=> {
//   console.log(number1 / number2)
// },3000)
// console.log(number2 - number1)
// new Promise(() => {
//   console.log('Gamer with Promise 4')
// }).then (
//   () => {
//     console.log('Gamer with then Promise 5')
//   }
// )

// for(var i = 0; i<10; i++) {
//   setTimeout(() => {
//     console.log(i * 60)
//   }, 3000)
// }


// for(var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i * 60)
//   },3000)
// }

// var name = 'Shree'

// function redundant(name) {
//   var func = () => {console.log(name)}
//   return func
// }

// redundant()


// function matchStick(house) {
//   if (house == 0) {
//     console.log(0)
//   }
//   else if(house == 1) {
//     console.log(house * 6)
//   } else if (house > 1) {
//     console.log((house * 6) - house + 1)
//   }
// }

// // matchStick(0)

// var person = {name : "Shree", city : "tiruppur"}

// var person2 = {name : "Sanjay", city : "Coimbatore"}

// var dupliPerson = {...person}

// if(person === dupliPerson) {
//   console.log('Same')
// } else {
//   console.log('not Same')
// }

// var number = -1231

// if(!number) { //Condition needs to be true -!- makes the condition true
//   console.log("true")
// } else {
//   console.log("false")
// }

// var comicNumber = 90

// function comicstan() {
//   var comicNumber = 20
//   if(this.comicNumber <= comicNumber) {
//     console.log("Comic is greater")
//   } else {
//     console.log("Comic is Smaller")
//   }
// }

// comicstan()

// console.log('Shree')

console.log({values : callOut()})

function callOut() {
  setTimeout(() => {
    for(let i = 0 ; i < charArr.length; i++) {
      console.log(nameGenerator(7, charArr[i]))
    }
  }, 2000)
}


const charArr = ['ABCDEDFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstvuwxyz0123456789', 
                 '[])^&2=+ABCDEabcdeijklmnopqrstvuwxyz012345', 
                 '|}<?>~`abcdefghABCDEFGijklmnopqrstvuwxyz012345']
function nameGenerator(leng, chars){
  let out = ''
  for(let i = 0; i < leng; i++) {
    out += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return out
}

// console.log(nameGenerator(7, charats))

// Call stack, SetTimeOut, Hositing, Call by reference, Promises, Callback functions, Operators

