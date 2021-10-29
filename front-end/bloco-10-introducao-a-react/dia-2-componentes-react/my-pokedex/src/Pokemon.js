import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokeData } = this.props;
    return (
      <section>
        <div>
          <h3>{pokeData.name}</h3>
          <p>Type: {pokeData.type}</p>
          <p>Average Weight: {pokeData.averageWeight.value} {pokeData.averageWeight.measurementUnit}</p>
        </div>
        <img src={pokeData.image} alt={pokeData.name}/>
      </section>
    )
  }
}

export default Pokemon;
