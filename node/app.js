// using express for the first time

const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const { result } = require("lodash");
// const Blog = require("./models/blog");
const blogRoutes = require("./routes/blogRoutes");

// // connect to mongoDB
// const dbURI =
//   "mongodb+srv://tester:Test@123@cluster0.dfqz2xc.mongodb.net/Node-Tut?retryWrites=true&w=majority";
// const dbURI = "mongodb://localhost:27017//Node-Tut";
const dbURI =
  "mongodb+srv://tester:test123@cluster0.dfqz2xc.mongodb.net/Node-Tut?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("COnnected to DB"))
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");
// if you're using other folder than default views
// you can register as follows
app.set("views", "myviews");

//listening to requests

app.listen(3000); // you can store this in case youre going to use it elsewhere as in case of WebSockets

//post req
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

/*mongoose and mongo sandbox routes
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "Blockchain Riches New Height",
    snippet: "blah blah blah blah blah blah blah blah blah blah  ",
    body: "blah blah blah blah blah blah blah blah blah blah  ",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/single-blog", (req, res) => {
  Blog.findById("64b4fd3b6b433e5520c1a514")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
*/

/*
app.use((req, res, next) => {
  console.log("new request was made:");
  console.log("host:", req.hostname);
  console.log("path:", req.path);
  console.log("method:", req.method);
  next();
});
*/

app.get("/", (req, res) => {
  //   const blogs = [
  //     { title: "Abhishek finds Gold", snippet: " He does find it " },
  //     {
  //       title: "Abhishek is happy !",
  //       snippet: " Watching favourite series and eating good food ",
  //     },
  //     {
  //       title: "Abhishek gets 15LPA + offer",
  //       snippet:
  //         " He does get it, all his hardwork is finally paid off and his parents are very happy and proud about it. Hurray !!! ",
  //     },
  //   ];
  //   res.render("index", { title: "Home", blogs });

  res.redirect("/blogs");
});

//blogs route
app.use("/blogs", blogRoutes);

//404
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

/*
app.get("/", (req, res) => {
  //instead of res.write & res.end, you can use res.send
  // also it infers the status code automatically, so we dont need to manually hardcode the status code
  //res.send("'<h1>Am using Express </h1>");
  res.sendFile("./views/index.html", { root: __dirname });
});


app.get("/about", (req, res) => {
  //res.send("'<h1>ABout page </h1>");
  res.sendFile("./views/about.html", { root: __dirname });
});

//redirects & 404
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// use() is used for middleware firing functions from express
// as express runs top-down the code
// if it found a match for user's browsing url , it will return response
// else it will fire the below function for every url user is searching and not founding
// it should always be at the bottom of the code
app.use((req, res) => {
  res.statusCode(404).sendFile("./views/404.html", { root: __dirname });
});

*/

// app.get("/about", (req, res) => {
//   res.render("about", { title: "About" });
// });
