import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry, Page not Found </h2>
      <Link to="/">Back to the Home-Page . . .</Link>
    </div>
  );
};

export default NotFound;
