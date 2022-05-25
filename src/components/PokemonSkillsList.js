import React from 'react'
import PokemonContext from '../contexts/pokemon/PokemonContext'


const PokemonSkillsList = () => {

  const dataSkillsProvider = React.useContext(PokemonContext)

  return (
    <div className='skills-list'>

        <p>_Pokemon Skills List_</p>
        <p>{ dataSkillsProvider }</p>

    </div>
  )
}

export default PokemonSkillsList