import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {Container} from "semantic-ui-react";
import Marvel from "./Marvel";

function mapMarvelData(data) {
    return {
        name: data[4].name,
        description: data[4].description
    };
}

function App() {
  const[data, setData] = useState({});



  useEffect(() => {
      const fetchMarvelHeroes = async() => {
          const url =
              'https://gateway.marvel.com:443/v1/public/characters?ts=1675961395&apikey=824b4f2bb67a85e638a19888121bd05a&hash=d32f224fb3ad8c01de9db005300f1ef6';
          await fetch(url)
              .then(res => res.json())
              .then(result => {
                  setData(result.data.results)
                  if (Object.entries(result).length) {
                      const mappedData = mapMarvelData(result)
                      return mappedData
                  }
              });
      }
      fetchMarvelHeroes();
  }, []);


  //console.log(data);

  return (
    <div className="App">
      <Marvel data={data} />
    </div>
  );
}

export default App;
