import React from 'react'
import Card from '../../components/card/Card'
import './Home.scss'

const Home = () => {
  
  return (
    <div className='home containercontainer-pall'>
      <div className="home-cta">
      <Card
        title='Award-winning custom designs and digital branding solutions'
        text='With over 10 years in the industry, we are experienced in creating fully responsive websites, apps, and engaging brand experiences. Find out more about our services.'
        link='/company'
        linkText='LEARN MORE'
      />
      </div>
    </div>
  )
}

export default Home
