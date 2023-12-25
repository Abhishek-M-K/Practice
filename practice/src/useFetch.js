import { useState, useEffect } from "react";

const useFetch = (url) => {
  // since we might fetch different resources so change movies-->data
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const abortCtrl = new AbortController();
    //console.log("use effect has been used");
    //this way data is fetched, setTimeout is used just to make the loading bit realistic
    //do not use in real web app
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          //console.log(res);
          // res.ok is true when the data is being fetched from an existing localhost
          if (!res.ok) {
            throw Error("Couldn't fetch the data from the server . . .");
          }
          return res.json();
        })
        .then((data) => {
          setMovies(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          // if (err.name === "AbortError") {
          //   console.log("Fetch request is aborted");
          // } else {
          // console.log(err);
          setError(err.message);
          setIsLoading(false);
          // }
        });
    }, 250);
    // return () => abortCtrl.abort();
  }, [url]);

  return { movies, isLoading, error };
};

export default useFetch;

//{ signal: abortCtrl.signal } passed as second argument in fetch function

//sometimes the custom hook functions that we make
//runs in background even when we are navigating to other pages and changes the state
//which results in come "mount" error

//so to control the running of fetch function in background, we can use cleanup functions with abort controller
//cleanup function , abortcontroller
//declare a new abortcontroller for the hook, pass its signal as 2nd arg in fetch
//and in .catch promise use conditional statements
//eg:
//if (err.name==="AbortError") ----> just console it as 'fetch is aborted'
//else if abort error is not present ----> then do the normal set
