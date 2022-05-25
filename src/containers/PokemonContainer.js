import React, { useContext } from 'react'

// Components
import PokemonSkillsList from '../components/PokemonSkillsList'
import PokemonLocationsList from '../components/PokemonLocationsList'

// Provider
import PokemonSkillsProvider from '../contexts/pokemon/providers/PokemonSkillsProvider'
import PokemonlocationsProvider from '../contexts/pokemon/providers/PokemonLocationsProvider'


const PokemonContainer = () => {

  return (
      <>
        
        <h2>[Pokemon Container]</h2>
        <PokemonSkillsProvider value= { PokemonSkillsProvider }>
          <PokemonSkillsList/>
        </PokemonSkillsProvider>

        <PokemonlocationsProvider value= { PokemonlocationsProvider }>
          <PokemonLocationsList/>
        </PokemonlocationsProvider>
      
      </>
  )
}

export default PokemonContainer