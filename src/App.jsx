import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [category, setCategory] = useState("Any");

  const [type, setType] = useState("single");
  const [joke, setJoke] = useState("");

  function getJokes() {
    axios
      .get(`https://v2.jokeapi.dev/joke/${category}?type=${type}`)
      .then((response) => {
        setJoke(response.data);
        console.log(response.data);
      });
  }

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <div className="App">
      <div className="card">
        <p className="joke-type">{joke.category}</p>
        <p className="joke">{joke.joke}</p>

        <button onClick={getJokes} className="button">
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
