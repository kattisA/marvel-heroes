import './App.css';
import {useEffect, useState} from "react";
import {Container, Menu} from "semantic-ui-react";

function App() {
  const[data, setData] = useState([]);

    // Black Widow Id= 1009189
    // Search by name like this: https://gateway.marvel.com:443/v1/public/characters?name=Black%20Widow&ts=1675961395&apikey=824b4f2bb67a85e638a19888121bd05a&hash=d32f224fb3ad8c01de9db005300f1ef6
    const fetchMarvelHeroes = async() => {
    const url =
        'https://gateway.marvel.com:443/v1/public/characters?ts=1675961395&apikey=824b4f2bb67a85e638a19888121bd05a&hash=d32f224fb3ad8c01de9db005300f1ef6';
    const results = await fetch(url);
    const data = await results.json();


    return data.data.results;
  };

  useEffect(() => {
      const fn = async() => {
          const data = await fetchMarvelHeroes();
          setData(data[4]);
      }
    fn();
  }, []);

  return (
    <div className="App">
      <Container>
       <div>
           <div className="ui card">
               {data&&<div className="image">
                   <img src={data.thumbnail.path + "." + data.thumbnail.extension}
                        alt={"Thumbnail photo of " + data.name}/>
               </div>}
               <div className="content">
                   {data&&<a className="header">{data.name}</a>}
                   {data&&<div className="description">
                       {data.description}
                   </div>}
               </div>
               <div className="extra content">
               </div>
           </div>
       </div>
      </Container>
    </div>
  );
}

export default App;
