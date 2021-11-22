import React, { useState } from 'react';
import Results from './Results';

const Search = () => {

  const [searchTerm, setSearchTerm] = useState("Enter the title...")
  const [gameResults, setGameResults] = useState([])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let slug = searchTerm.split(' ').join('-').toLowerCase()

    setGameResults([])
    fetch(`https://rawg.io/api/games?search=${slug}&key=67e9e132b2064636ab63344475c6b1e9`)
    .then(resp => resp.json())
    .then(({results}) => {
      results === undefined ? alert('no games found') : setGameResults(results)
    })
    setSearchTerm("")
  }

  return (
    <div className="game-search">
      <h1 color>Find what you seek, weary traveler...</h1>
        <form onSubmit={onSubmit}>
          <input type="text" value={searchTerm} onChange={handleChange}/>
          <br></br>
          <input type="submit"/>
        </form>
        <Results gameResults={gameResults} />
    </div>
  );
}

export default Search;



