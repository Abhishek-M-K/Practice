import MovieList from "./MovieList";
import useFetch from "./useFetch";

const Home = () => {
  const { movies, isLoading, error } = useFetch("http://localhost:8000/movies");
  //   let name = "Yuno"; ---> first name

  // const [name, setName] = useState("Yuno");
  // const [age, setAge] = useState(19);

  // const handleClick = (e) => {
  //   // name = "Asta"; ---> changing the name later, but this will not work since we haven't used hook yet
  //   // console.log("Hello everybody, Abhishek Khandare here ! ", e);

  //   setName("Asta");
  //   setAge(18);
  // };

  //   const handleClickAgain = (name, e) => {
  //     console.log(`Hello this is ${name}`, e);
  //   };

  // const [movies, setMovies] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const handleDelete = (id) => {
  //   const newMovies = movies.filter((movie) => movie.id !== id);
  //   setMovies(newMovies);
  // };

  // useEffect(() => {
  //   //console.log("use effect has been used");
  //   //this way data is fetched, setTimeout is used just to make the loading bit realistic
  //   //do not use in real web app
  //   setTimeout(() => {
  //     fetch("http://localhost:8000/movies")
  //       .then((res) => {
  //         //console.log(res);
  //         // res.ok is true when the data is being fetched from an existing localhost
  //         if (!res.ok) {
  //           throw Error("Couldn't fetch the data from the server . . .");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setMovies(data);
  //         setIsLoading(false);
  //         setError(null);
  //       })
  //       .catch((err) => {
  //         // console.log(err);
  //         setError(err.message);
  //         setIsLoading(false);
  //       });
  //   }, 1000);
  // }, []);

  return (
    <div className="home">
      {/* <h2>Upcoming Movies :</h2> */}
      {/*---> props declaration with name of the hook*/}
      {error && <div>{error}</div>}
      {isLoading && <div>Loading.....</div>}
      {movies && (
        <MovieList
          movies={movies}
          title="Upcoming Movies : "
          // handleDelete={handleDelete}
        />
      )}

      {/* 
      
      Reusing the components with filter 
      which returns the list 
      according to the boolean output of the 
      filter condition 

       

      <MovieList
        movies={movies.filter(
          (movie) => movie.director === "Christopher Nolan"
        )}
        title="Nolan's Movies : "
      />*/}
      {/*    Normal Declaration    
      <div className="movie_list">
      {movies.map((movie) => (
        <div className="movie_preview" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>Directed by : {movie.director}</p>
        </div> */}
      {/* <p>{name}</p>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click here !</button> */}
      {/* <button onClick={handleClickAgain("Conrad Leto")}>Click again</button> //this wont work */}
      {/* <button
        onClick={(e) =>
          handleClickAgain("Conrad Leto, the 27th Wizard King !", e)
        }
      >
        Click To Know
      </button> */}
    </div>
  );
};

export default Home;

//in onClick we cannot pass function() ---> this invokes the function before clicking the button
//also we cannot pass function(arguments) ---> this also invokes the function before clicking the button
//instead we pass it as an anonymous function
// // eg:
// <button
//         onClick={() => handleClickAgain("Conrad Leto, the 27th Wizard King !")}
//       >
//         Click To Know
//       </button>

// event object (e) is used to get addtitonal info about the event
// it can be directly passed as argument in fat arrow function
// in anonymous function we need to passed to function reference as well

//Hook in react is used to perform certain type of job and it is identified by 'useName'
//it is used to make the variable dynamic/reactive
// it is first imported like ---> import {useState} from 'react'
// const [variable_name, function]=useState('variable_data') ---> form of array destructuring
//function name can be anything
//hook re-renders the value and display the updated value

//useEffect is a simple hook, we doesn't declare it as a const or variable
//nor it returns anything, is a simple function
//which run everytime after there's re-render
//whenever the state changes/data in the DOM , useEffect runs
//it is fired after every re-render, we can also access the state inside useEffect
//it might also end up in a loop of re-renders, so we must be careful if the useEffect changes the state
//if useEffect changes the state--> updated state will trigger useEffect--> useEffect again will change the state
//in case we want to run the useEffect maybe once or depending , not always, we can use dependency array as second argument
//if we pass an empty array as second argument, the function will run only once after the initial render
/*

eg: 
    const [name, setName] = useState("Yuno");


    useEffect(() => {
    console.log("use effect has been used");
    console.log(name);
  }, [name]);

    <button onClick={() => setName("Asta")}>Change</button>
    <p>{name}</p>



  here name--> which is the name of the state, is passed as the second argument to useEffect function
  and whenever the name state changes , the function runs
  it also runs after the first initial render



  http://localhost:8000/movies ---> api


  const [movies, setMovies] = useState([
    {
      title: "Transformer : The Rise of Beast",
      summary: "lorem ipsum...",
      director: "JP Murgan",
      id: 1,
    },
    {
      title: "Flash",
      summary: "lorem ipsum...",
      director: "DC MARVELS",
      id: 2,
    },
    {
      title: "Adipurush",
      summary: "lorem ipsum...",
      director: "Om Raut",
      id: 3,
    },
    {
      title: "Oppenheimer",
      summary: "lorem ipsum...",
      director: "Christopher Nolan",
      id: 4,
    },
    {
      title: "Dunkirk",
      summary: "lorem ipsum...",
      director: "Christopher Nolan",
      id: 5,
    },
    {
      title: "Interstellar-II",
      summary: "lorem ipsum...",
      director: "Christopher Nolan",
      id: 6,
    },
  ]);
*/
