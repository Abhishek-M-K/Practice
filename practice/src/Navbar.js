import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>BookmyShow</h1>
      <div className="links">
        {/* <a href="/">Home</a>
        <a href="/about">Add</a>
        <a href="/services">Services</a>
        <a href="/book">Booking</a> */}
        <Link to="/">Home</Link>
        <Link to="/create">Add</Link>
        <Link to="/service">Services</Link>
        <Link to="/booking">Booking</Link>
      </div>
    </nav>
  );
};

export default Navbar;

// just like in HTML, in react too we can use inline styling by giving dynamic values and
// making use of object including key value pairs of css styling
// eg:

/* <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "red",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a> */
