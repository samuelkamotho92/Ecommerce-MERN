import React from 'react'
import Navabar from '../components/Navabar'
import Announcements from '../components/Announcements'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Allproducts from '../components/Allproducts'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
        <Announcements />
        <Navabar />
        <Slider />
        <Categories />
        <Allproducts />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home