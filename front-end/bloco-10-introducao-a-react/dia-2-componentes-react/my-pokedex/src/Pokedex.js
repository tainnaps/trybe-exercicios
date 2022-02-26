import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <section>{pokemons.map((pokemon) => <Pokemon pokeData={pokemon} key={pokemon.id}/>)}</section>
    );
  }
}

export default Pokedex;
