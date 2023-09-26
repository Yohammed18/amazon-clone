import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
//the lister will keep track who is sign in

function App() {
  //dynamic if statement
  useEffect(() =>{
    //Will only run once the app component loads...

  }, [])

  return (
    //BEM
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route 
          path="/login" 
          element={<><Login /></>}/>
          {/**Home Page Root
           * Defualt page is always at the bottom
           */}
          {/**Checkout Page Root */}
          <Route 
          path="/checkout" 
          element={<><Header/><Checkout /></>}/>
          {/**Checkout Page Root */}
          <Route 
          path="/" 
          element={<><Header/><Home/></>}/>
        </Routes>        
      </div>
    </BrowserRouter>
  );
}

export default App;
