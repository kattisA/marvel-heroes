import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {Container} from "semantic-ui-react";

//Check this: https://codesandbox.io/embed/v5ims?codemirror=1

function App() {
  const[data, setData] = useState([]);

  const fetchMarvelHeroes = async() => {
    const url =
        'https://gateway.marvel.com:443/v1/public/characters?ts=1675961395&apikey=824b4f2bb67a85e638a19888121bd05a&hash=d32f224fb3ad8c01de9db005300f1ef6';
    const results = await fetch(url)
        .then(res => res.json())
        .then(res => res.data)
        .then(res => res.results);

    setData(results);

  };

  useEffect(() => {
    fetchMarvelHeroes();
  }, []);


  console.log(data);

  return (
    <div className="App">
      <Container>
       <div>
           <div className="ui card">
               <div className="image">
                   <img src={data[4].thumbnail.path + "." +data[4].thumbnail.extension}/>
               </div>
               <div className="content">
                   <a className="header">{data[4].name}</a>
                   <div className="meta">
                       <span className="date">Joined in 2013</span>
                   </div>
                   <div className="description">
                       {data[4].description}
                   </div>
               </div>
               <div className="extra content">
                   {/*<a>
                       <i className="user icon"></i>
                       22 Friends
                   </a>*/}
               </div>
           </div>
       </div>
      </Container>
    </div>
  );
}

export default App;
