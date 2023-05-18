import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Choice from '../../components/Choice/Choice'
import OurGoal from '../../components/OurGoal/OurGoal'
import Social from '../../components/Social/Social'
import News from '../../components/News/News'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Choice />
      <OurGoal />
      <Social />
      <News />
      <Footer />
    </div>
  )
}

export default Home