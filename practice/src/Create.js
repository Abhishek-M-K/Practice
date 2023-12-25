import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [summary, setSumm] = useState("");
  const [director, setDirect] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = { title, summary, director };
    setIsLoading(true);

    fetch("http://localhost:8000/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    }).then(() => {
      setIsLoading(false);
      console.log("New movie added to the list");
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Add the upcoming Movie : </h2>
      <form onSubmit={handleSubmit}>
        <label>Movie Title : </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Summary : </label>
        <textarea
          required
          value={summary}
          onChange={(e) => setSumm(e.target.value)}
        ></textarea>

        <label>Directed by : </label>
        <input
          type="text"
          required
          value={director}
          onChange={(e) => setDirect(e.target.value)}
        />

        {!isLoading && <button>ADD</button>}
        {isLoading && <button disabled>Adding</button>}
      </form>
    </div>
  );
};

export default Create;
