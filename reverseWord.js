// Algorithm
// 1. Convert the String into Array 
// 2. Get the charCode of each item and check whether its a letter or number 
//     2.1 If its a letter then push it to letters Array or if its a number then push it to numbers array 
//         and store the arrays in an object and return it.
// 3. 



const characterGetter = (str) => {
    return [...str].reduce((indexObj, item, index) => {
        let charCode = item.charCodeAt()

        if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            indexObj.letters.push(index)
        } else {
            indexObj.numbers.push(index)
        }
        return indexObj
    }, {letters : [], numbers : []})
}

const reverseWords = (str) => {
    var characterObj = characterGetter(str)
    return [...str].reduce((reverseArr, item) => {
        let code = item.charCodeAt()

        if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            reverseArr[characterObj.letters.pop()] = item
        } else {
            reverseArr[characterObj.numbers.shift()] = item
        }
        return reverseArr
    }, []).join('')
}

console.log(reverseWords("asts7hg8jsgtred5lyaass")); // stsa7gh8dertgsj5ssaayl
console.log(reverseWords("asts77hg8jsgtred5lyaass")); // stsa77gh8dertgsj5ssaayl
console.log(reverseWords("123")); // 123
console.log(reverseWords("asd")); // dsa
console.log(reverseWords("asd1f")); // dsa1f