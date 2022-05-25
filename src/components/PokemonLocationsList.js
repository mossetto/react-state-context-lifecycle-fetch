import React from 'react'
import PokemonContext from '../contexts/pokemon/PokemonContext'

const PokemonLocationsList = () => {

    const { locations, setLocations } = React.useContext(PokemonContext)
    const { counterLocation, setCounterLocation } = React.useContext(PokemonContext)

    const getLocationsList = async () => {
        const data = await fetch('https://pokeapi.co/api/v2/location/')
        const locations = await data.json()
        setLocations(locations.results)
    }

  return (
    <div className='location-list'>

        <p>_Pokemon Locations List_ </p><br/>
        <button onClick={ ()=>{ setCounterLocation(counterLocation+1) }}>Cambiar zona</button>
        <p>{ counterLocation }</p><br/>
        <button onClick={ ()=> { getLocationsList() }}>Get Location list</button>
        <ul>
            {
                locations.map((location, index) =>(
                    <li key={ index }> { location.name }</li>
                ))
            }
        </ul>

    </div>
  )
}

export default PokemonLocationsList