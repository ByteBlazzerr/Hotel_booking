import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestinantion from '../components/FeaturedDestinantion'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'
const Home = () => {
  return (
    <>
        <Hero />
        <FeaturedDestinantion />
        <ExclusiveOffers />
        <Testimonial />
        <NewsLetter></NewsLetter>
    </>
  )
}

export default Home 