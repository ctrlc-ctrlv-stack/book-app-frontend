import React from 'react'
import TopSellers from './TopSellers'
import Banner from './Banner'
import Recommended from './Recommended'
import News from './News'
import Footer from '../../components/Footer'
  
const Home = () => {
  return (
    <>
    <Banner/>
    <TopSellers/>
    <Recommended/>
    <News/>
    <Footer/>
    </>
  )
}

export default Home