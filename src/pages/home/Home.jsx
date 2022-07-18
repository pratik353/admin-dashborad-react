import React from 'react'
import './home.scss'

import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widgets/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/List'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homecontainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="erning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured />
          <Chart  title="Last 6 months ( Revenue )" aspect={2 / 1}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          < List/>
        </div>
      </div>
    </div>
  )
}

export default Home