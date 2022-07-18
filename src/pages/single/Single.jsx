import React from 'react'
import './single.scss'

import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/List'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG2mN2m7obbCPYAalmKKnHFPb1apM8yU0dPA&usqp=CAU" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">John Doe</h1>
                <div className="detailItem">
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>Johndoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>+91 7588572178</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Address:</span>
                  <span className='itemValue'>Elton St. 433 Garden Yd. NewYork</span>
                </div>
                <div className="detailItem">
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months )"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single