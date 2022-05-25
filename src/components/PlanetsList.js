import React from 'react'
import StarwarsContext from '../contexts/starwars/StarwarsContext'

const PlanetsList = () => {

    const dataPlanetsProvider = React.useContext(StarwarsContext)

  return (
    <div><span>Planets List</span><br/>
        <ul>
            {
                dataPlanetsProvider.map((planet, index) =>(
                    <>

                        <li key={ index }>{planet.name} - {planet.terrain}</li>
                    
                    </>
                ))
            }
        </ul>

    </div>
  )
}

export default PlanetsList