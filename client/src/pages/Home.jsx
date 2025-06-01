import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestinantion from '../components/FeaturedDestinantion'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'
import RecommendedHotels from '../components/RecommendedHotels'
const Home = () => {
  return (
    <>
        <Hero />
        <RecommendedHotels></RecommendedHotels>
        <FeaturedDestinantion />
        <ExclusiveOffers />
        <Testimonial />
        <NewsLetter></NewsLetter>
    </>
  )
}

export default Home 