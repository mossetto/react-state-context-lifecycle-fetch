import './App.css';
import React from 'react';

// Containers
import PokemonContainer from './containers/PokemonContainer';
import PostsContainer from './containers/PostsContainer';
import StarwarsContainer from './containers/StarwarsContainer';

// Contexts
import PokemonContext from './contexts/pokemon/PokemonContext';
import PostContext from './contexts/posts/PostContext';
import StarwarsContext from './contexts/starwars/StarwarsContext';


function App() {
  const GetPokemonContext = React.useContext(PokemonContext)
  const getPostsContext = React.useContext(PostContext)
  const getStarwarsContext = React.useContext(StarwarsContext)

  return (
    <>
      <h1>Contexts App</h1>

      <StarwarsContext.Provider value= { getStarwarsContext }>
        <StarwarsContainer/>
      </StarwarsContext.Provider>

      <PokemonContext.Provider value= {GetPokemonContext}>
        <PokemonContainer/>
      </PokemonContext.Provider>

      <PostContext.Provider value= {getPostsContext}>
        <PostsContainer/>
      </PostContext.Provider>

    </>
  );
}

export default App;
