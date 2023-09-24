import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';

function App() {
  return (
    //BEM
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/**Checkout Page Root */}
          <Route 
          path="/checkout" 
          element={<><Header/><h1>This is the Checkout Page</h1></>}/>

          {/**Home Page Root
           * Defualt page is always at the bottom
           */}
          <Route 
          path="/" 
          element={<><Header/><Home/></>}/>
        </Routes>        
      </div>
    </BrowserRouter>
  );
}

export default App;
