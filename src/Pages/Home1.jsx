import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Immersive from '../components/Immersive'
import Management from '../components/Management'
import Misson from '../components/Misson'
import Upcoming from '../components/Upcoming'
import News from '../components/News'
import Testimonial from '../components/Testimonial'
import Services from '../components/Services'
import Next from '../components/Next'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home1 = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Immersive />
        <Management />
        <Upcoming />
        <Misson />
        <News />
        <Testimonial />
        <Services />
        <Next />
        <Faq />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home1
