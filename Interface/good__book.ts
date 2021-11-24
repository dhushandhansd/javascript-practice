interface book {
  userId : number,
  id : number,
  title : string,
  body : string
}


const devBook:book  = {
  "userId" : 1,
  "id" : 1,
  "title" : "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body" : "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

console.log(devBook.userId)
console.log(devBook.title)