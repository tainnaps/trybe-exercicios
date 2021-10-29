// import logo from './logo.svg';
import React from 'react';
import Pokedex from './Pokedex';
import './App.css';
import pokemons from './data';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Pokedex</h1>
        <Pokedex pokemons={pokemons} />
      </>
    );
  }
}

export default App;
