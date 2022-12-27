const http = require("http");
const server = http.createServer((req, res) => {
  res.write(`{ "Name": "Siddharth", "Email": "testing@gmail.com" }`);
  res.end();
});
server.listen(5000);