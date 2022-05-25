import React from 'react'
import PokemonContext from '../PokemonContext'

function PokemonSkillsProvider(props){

    const PokemonSkills = 'Impactrueno!!'
    const toProvide = PokemonSkills

    return(
        <PokemonContext.Provider value= { toProvide }>
            {props.children}
        </PokemonContext.Provider>
    )

}
export default PokemonSkillsProvider