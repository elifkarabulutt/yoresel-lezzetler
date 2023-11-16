import React from 'react'
import Content from '../components/UI/Content'
import Hero from '../components/UI/Hero'
import Helmet from '../components/Helmet/Helmet'

const Home = () => {
  return (
    <Helmet title='Ana sayfa'>
      <Hero/>
      <Content/>
    </Helmet>
  )
}

export default Home