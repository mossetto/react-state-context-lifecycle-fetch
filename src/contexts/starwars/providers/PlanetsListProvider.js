import React from 'react'
import StarwarsContext from '../StarwarsContext'

function PlanetsListProvider(props){

    const [planets, setPlanets] = React.useState([])

    React.useEffect(()=>{
        getPlanetsList()
    }, [])

    const getPlanetsList = async () =>{
        const data = await fetch ('https://swapi.dev/api/planets')
        const planets = await data.json()
        setPlanets(planets.results)

    }
    

    const toProvide = planets

  return (
    <StarwarsContext.Provider value = {toProvide}>
        {props.children}
    </StarwarsContext.Provider>
  )
}

export default PlanetsListProvider