import React, { useState } from 'react'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import FoodDisplay from '../components/FoodDisplay'

const Home = () => {

    const [category, setCategory] = useState("All");

  return (
    <div>
        <Hero />
        <Menu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category} />
    </div>
  )
}

export default Home