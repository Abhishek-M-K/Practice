import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const MovieDetails = () => {
  const { id } = useParams();
  const { movies, isLoading, error } = useFetch(
    "http://localhost:8000/movies/" + id
  );

  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/movies/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="movies-details">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading . . .</div>}
      {movies && (
        <article>
          <h2>Movie Details - </h2>
          <div className="details">
            <h3>Title {movies.title}</h3>
            <div className="desc">
              <p>Directed by - {movies.director}</p>
              <p>Description : {movies.summary}</p>
            </div>
            <button onClick={handleClick}>Delete</button>
          </div>
        </article>
      )}
    </div>
  );
};

export default MovieDetails;
