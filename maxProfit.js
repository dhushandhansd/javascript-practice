var stocks = [7,1,5,3,6,4]

console.log(stocks)

let goodDay = []

for(var i = 0; i < stocks.length - 1; i++) {
    for(var j = 1 ; j < stocks.length; j++) {
        if(stocks[i] > stocks[j]) {
            goodDay.push(stocks[i])
        } else {
            goodDay.push(stocks[j])
        }
    }
}
console.log(goodDay)

