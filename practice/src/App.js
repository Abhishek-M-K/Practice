// import logo from "./logo.svg";
// import "./App.css";
import Navbar from "./Navbar"; // Navbar is inside the root component
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import MovieDetails from "./MovieDetails";
import NotFound from "./NotFound";

// here we can add components using jsx ---> similar to html
function App() {
  // const title = "Welcome to the New Blog !"; // can output string
  // const likes = 47; // can output number as well as array
  // const link = "https://www.amazon.in/";
  // cannot output boolean and objects
  // we can also directly write dynamic values in curly braces
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/movies/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; // exports the component functions

// App.js ---> Root component ---> initially rendered inside html file
// App.js can have multiple components such as Navbar.js, BlogDetails.js, Sidebar.js ---> (Parent Components)
// Now these parent components can have child components of their own , this is often known as Component Tree.

/* <div className="App">
<div className="content">
  <h1>{title}</h1>
  <p>Liked {likes} times</p>
  <p>{Math.random() * 1000}</p>

  <a href={link}>Amazon India</a>
</div>
</div> */
