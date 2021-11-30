var heroArr = ['One','Two','Three','Four','Five']

console.log(heroArr)

// Geeting Index at position in Arr
console.group('Getting Index')
console.log(heroArr.at(Math.floor(Math.random() * 5)))
console.groupEnd()


// Concating two Arr

var tempArr = ['Value','is','not','available']
console.group('Concating')
console.log(heroArr.concat(tempArr))
console.groupEnd()


// Constructor
console.group('Constructor')
var newArr = new Array(tempArr)
console.log('New Arr :' + newArr)
console.groupEnd()

// Flat

var nestedArr = ['The', 'Values', 'here', ['are', 'nested'],['Doctor','Boy']]
console.group('Nested Group')
console.log(nestedArr)
console.log(nestedArr.flat())
console.groupEnd()


//Entries

var nestedItems = nestedArr.entries()
console.group('Entries')
for(const [index, ele] of nestedItems) {
    console.log(index, ele)
}
console.groupEnd()


// For Each
console.group('For Each')
nestedArr.forEach(ele => {
    console.log('Each value :' + ele)
})
console.groupEnd()

//Find

// console.group('Find')
// console.log(nestedArr.find('Doctor'))
// console.groupEnd()

// Flat Map

console.group('Flat Map')
var cusIndex = 1
console.log(nestedArr.flatMap(ele => [cusIndex * 2 + ele]))
console.groupEnd()

// console.group()
// console.groupEnd()
