/** ALGORITHM
 *  Create a Function called findPath and pass obj and string as paramater
 *  Split all '.' with split funtion 
 *  Add all the items in the string one by one with reduce function
 *  Store it in the variable findPath
 *  Call the findPath function with necessary parameter
**/


var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

function findPath(object, string) {
    var value = string.split('.').reduce((obj, key) => obj[key], object)
    if(value) {
        return value
    } else {
        return undefined
    }
}

const findPAth = (object, string) => string.split('.').reduce((obj, key) => (obj || {})[key], object)

console.log(findPAth(obj, 'a.b.c')); // 12
console.log(findPAth(obj, 'a.b')); // {c: 12, j: false}
console.log(findPAth(obj, 'a.b.d')); // undefined
console.log(findPAth(obj, 'a.c')); // undefined
console.log(findPAth(obj, 'a.b.c.d')); // undefined
console.log(findPAth(obj, 'a.b.c.d.e')); // undefined
console.log(findPAth(obj, 'a.b.j')); //false
console.log(findPAth(obj, 'a.b.j.k')); //undefined
console.log(findPAth(obj, 'a.k')); //null
