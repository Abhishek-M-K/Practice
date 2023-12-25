import { Link } from "react-router-dom";

const MovieList = ({ movies, title, handleDelete }) => {
  //   const movies = props.movies;
  //   const title = props.title;

  //   console.log(props, movies);
  return (
    <div className="movie_list">
      <h2>{title}</h2>
      {movies.map((movie) => (
        <div className="movie_preview" key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <h3>{movie.title}</h3>
            <p>Directed by : {movie.director}</p>
          </Link>

          {/* <button onClick={() => handleDelete(movie.id)}>Not Interested</button> */}
        </div>
      ))}
    </div>
  );
};

export default MovieList;

// props is used to make the lists reusable wherever required
// it is imported just like we import normal components but with some propertiess
// sfc is written in a separate component where the list to be reused is stored
// in that we pass the 'props' as the object in sfc
// and variable in sfc as name of the hook = props.hookname
// and we just console it with props

// we can also pass variable in sfc by destructuring the object, hence no need to pass 'props' as object

// we can also pass functions in other components as props
// eg: here we've passed handleDelete function as prop which is depended on id of the movie

/*since we dont always want to hardcode the data here for eg --> movies
    we dont have to write description/details for each and every movie
    we can make use of a api
    by keeping the useState null--> where we've currently hardcoded the movie details
    and by making a fetch request inside the useEffect
*/
