import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import './style/dark.scss';

import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import New from './pages/new/New'
import Single from './pages/single/Single'

import {userInputs, productInputs} from './formSource'
import { DarkModeContext } from './context/darkModeContext';

const App = () => {

  const {darkMode} = useContext(DarkModeContext) ;
  const location = useLocation();

  useEffect(()=>{
    const fullUrl = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;
    console.log("Full URL:", fullUrl);

    const loadTime = performance.now();
    // console.log("Page load time:", loadTime, "ms");

    const logUrl = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;
    fetch(logUrl, {
        method:'GET'
      })
      .then((response) => {
        // console.log(
        //   "Successfully logged full URL and load time:",
        //   response.data
        // );
      });
  },[location.pathname])


  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* <BrowserRouter> */}
        <Routes>

          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login/>} />
          </Route>
          <Route path='users'>
            <Route index element={<List />} />
            <Route path=':userId' element={<Single/>} />
            <Route path='new' element={<New inputs= {userInputs} title="Add new user"/>} />
          </Route>

          <Route path='products'>
            <Route index element={<List />} />
            <Route path=':productId' element={<Single/>} />
            <Route path='new' element={<New inputs= {productInputs} title="Add new Product"/>} />
          </Route>

        </Routes>
      {/* </BrowserRouter> */}
    </div>
  )
}

export default App
