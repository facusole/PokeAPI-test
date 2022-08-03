import './App.css';
import {useState} from 'react'

function App() {

  const [pokemon, setPokemon] = useState({})

  function handlePokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 904)}`).then(response => response.json())
    .then(data => {
      setPokemon({...data})
    });
  }

  return (
    <div className="App">
      <div className="border">
        <img src={pokemon.sprites ? pokemon.sprites.front_default : '' } />
        <div className='name'>{pokemon.species ? pokemon.species.name : ''}</div>
        <button onClick={handlePokemon}>Mostrar</button>
      </div>
    </div>
  );
}

export default App;
