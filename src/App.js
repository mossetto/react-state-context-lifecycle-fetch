import './App.css';
import React from 'react';

// Containers
import PokemonContainer from './containers/PokemonContainer';
import PostsContainer from './containers/PostsContainer';

// Contexts
import PokemonContext from './contexts/pokemon/PokemonContext';
import PostContext from './contexts/posts/PostContext';


function App() {
  const GetPokemonContext = React.useContext(PokemonContext)
  const getPostsContext = React.useContext(PostContext)

  return (
    <>
      <h1>Contexts App</h1>
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
