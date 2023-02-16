import React from 'react'
import './Home.css'
import Chart from '../../Dashboard/Chart/Chart'
import FeaturedInfo from '../../Dashboard/FeaturedInfo/FeaturedInfo'
import WidgetLg from '../../Dashboard/WidgetLg/WidgetLg'
import WidgetSm from '../../Dashboard/WidgetSm/WidgetSm'
import { userData } from '../../DummyData/Dummy'
const Home = () => {
  return (
    <div className="home">
    <FeaturedInfo />
    <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    <div className="homeWidgets">
      <WidgetSm/>
      <WidgetLg/>
    </div>
  </div>
  )
}

export default Home
