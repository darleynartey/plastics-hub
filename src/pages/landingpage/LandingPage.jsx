import React from 'react'
import Header from '../../components/layout/Header'
import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'
import Resources from '../../components/resources/Resources'
import Dealers from '../../components/dealers/Dealers'
import Footer from '../../components/layout/Footer'
import Support from '../../components/support/Support'

const LandingPage = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Resources/>
      <Support/>
      <Dealers/>
      <Footer/>
    </>
  )
}

export default LandingPage