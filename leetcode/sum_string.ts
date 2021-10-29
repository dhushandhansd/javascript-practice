/**
 * @todo
 * 1. Create a Function that takes two Input in String format
 *  1.1) Convert the string into number with parseInt
 *  1.2) Add the Two Number and store to output variable
 *  1.3) Convert the output to String with toString method
 *  1.4) Return the output
 * 2. Call the string_sum function and pass the two Parameters
 * 3. Console log the output from the Function
 */



function string_sum(number1, number2) {
  number1 = parseInt(number1)
  number2 = parseInt(number2)
  var output = number2 + number1
  output  = output.toString()
  return output
}

console.log(string_sum("11", "123"))