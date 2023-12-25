const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  // console.log("request is made");
  // console.log(req.url, req.method);

  //using lodash for the first time
  const num = _.random(100, 999);
  console.log(num);

  const greet = _.once(() => {
    console.log("Hello Ever'body !!!");
  });

  greet();
  greet();
  //
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;

    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;

    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;

    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  //set header content type
  res.setHeader("Content-Type", "text/html");

  //sending an html file
  //fs.readFile("./views/index.html", (err, data)
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
      //res.end(data)
    }
  });

  //   res.write("<h1>Hello !!!</h1>");
  //   res.end();
});

server.listen(3000, "localhost", () => {
  console.log("listening for port 3000");
});
