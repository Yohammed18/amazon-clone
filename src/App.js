import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
//the lister will keep track who is sign in
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider/StateProvider';

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() =>{
    //Will only run once the app component loads...

    auth.onAuthStateChanged(authUser =>{
      console.log('USER: ',authUser)

      if(authUser){
        //The user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else {
        // The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
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
           * Default page is always at the bottom
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
