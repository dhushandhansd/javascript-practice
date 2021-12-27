const http = require("http");
const PORT = 4500

http.createServer((req, res) =>{
  res.writeHead(200, {'Content-Type' : 'text/html'});

  var url = req.url;

  if(url === "/"){
    res.write("<h1>Home Page</h1>");
    res.end();
  } else if (url === "/services") {
    res.write("<h1>Services Page</h1>");
    res.end();
  } else if(url === "/about") {
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.write("<h1>Page Not Found</h1>")
    res.end();
  }
}).listen(PORT, () => {
  console.log(`Server listening at PORT ${PORT}`)
})