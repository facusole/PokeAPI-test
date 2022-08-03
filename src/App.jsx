import './App.css';
import {useState} from 'react'

function App() {

  const [pokemon, setPokemon] = useState({})

  function handlePokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 904)}`).then(response => response.json())
    .then(data => {
      setPokemon({...data})
      console.log({...data})
    });
  }


  return (
    <div className="App">
      {pokemon.id ? 

      <div className='container'>
        <div className="border">
        <img src={pokemon.sprites.front_default} alt='Pokemon' />
        <div className='name'>{pokemon.species ? pokemon.species.name : ''}</div>
        <button onClick={handlePokemon}>Mostrar</button>
      </div>
      <div className="border">
        <ul>
          <li>{pokemon.stats[0].stat.name + ': ' + pokemon.stats[0].base_stat}</li>
          <li>{pokemon.stats[1].stat.name + ': ' + pokemon.stats[1].base_stat}</li>
          <li>{pokemon.stats[2].stat.name + ': ' + pokemon.stats[2].base_stat}</li>
          <li>{pokemon.stats[3].stat.name + ': ' + pokemon.stats[3].base_stat}</li>
          <li>{pokemon.stats[4].stat.name + ': ' + pokemon.stats[4].base_stat}</li>
          <li>{pokemon.stats[5].stat.name + ': ' + pokemon.stats[5].base_stat}</li>
        </ul>
      </div>
      </div> 

      : <div className='container'>
        <button onClick={handlePokemon}>Mostrar</button>

        </div>}     
    </div>
  );
}

export default App;
