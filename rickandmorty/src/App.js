import logo from './logo.svg';
import { Card } from './components/Card';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  let [characters, setCharacter] = useState(null)
  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character")
    .then(responde => responde.json())
    .then(data => setCharacter(data.results))
  },[])
  return (
    <div className="App">
      <div class="container">
        <div class="row">
          {characters && characters.map((character)=>(
          <div class="gallery_product col-lg-2   col-md-4 col-sm-4 col-xs-6 filter hdpe">
          <Card
          key={character.id}
          url={character.image}
          name = {character.name}
          gender = {character.gender}
          status = {character.status}
          />
          </div>))}
        </div>
      </div>
    <div class="row">
    </div>
    </div>
  );
}

export default App;
