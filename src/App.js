import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const[data, setData] = useState([]);

  const fetchMarvelHeroes = async() => {
    const url =
        'https://gateway.marvel.com:443/v1/public/characters?ts=1675961395&apikey=824b4f2bb67a85e638a19888121bd05a&hash=d32f224fb3ad8c01de9db005300f1ef6';
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson){
      setData(responseJson);
    }

  }

  useEffect(() => {
    fetchMarvelHeroes();
  }, []);

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
