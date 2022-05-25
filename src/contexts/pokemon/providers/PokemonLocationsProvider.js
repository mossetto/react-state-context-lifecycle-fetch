import React from 'react'
import PokemonContext from '../PokemonContext'

function PokemonlocationsProvider(props){

    const [locations, setLocations] = React.useState([
        {name: 'pedro'},
        {name: 'juan'},
        {name: 'lucas'},
    ])
    const [ counterLocation, setCounterLocation] = React.useState(5)

    const toProvide = { locations, setLocations, counterLocation, setCounterLocation }

    return(
        <PokemonContext.Provider value={toProvide}>
            {props.children}
        </PokemonContext.Provider>
    )
}

export default PokemonlocationsProvider