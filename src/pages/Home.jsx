import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
  const img = "https://images.pexels.com/photos/4188296/pexels-photo-4188296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
    <div style={{backgroundImage: `url(${img})`}} className={`justify-center  bg-no-repeat bg-cover bg-center rounded-lg h-screen`} >
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Home