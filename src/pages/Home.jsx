import React from 'react'
import Navabar from '../components/Navabar'
import Announcements from '../components/Announcements'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
const Home = () => {
  return (
    <div>
        <Announcements />
        <Navabar />
        <Slider />
        <Categories />
    </div>
  )
}

export default Home