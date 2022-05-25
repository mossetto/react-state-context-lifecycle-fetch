import React from 'react'
import PlanetsList from '../components/PlanetsList'
import PlanetsListProvider from '../contexts/starwars/providers/PlanetsListProvider'

const StarwarsContainer = () => {

  return (
    <div>
        <h3>Starwars Container</h3>
        <PlanetsListProvider>
            <PlanetsList/>
        </PlanetsListProvider>
    </div>
  )
}

export default StarwarsContainer