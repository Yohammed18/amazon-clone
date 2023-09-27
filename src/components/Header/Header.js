//use es7
import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import {useStateValue} from './../StateProvider/StateProvider'
import { auth } from '../../firebase';


function Header() {
  const [{basket, user}, dispatch] = useStateValue();


  const handleAuthentication = () =>{
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className='header'>
        {/**Build amazon logo, search field, and  children i.e. cart, sign in, orders, etc*/}
        {/** Logo */}
        <Link to='/'>
        <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
        </Link>
         {/** Search bar*/}
        <div className='header_search'>
            <input className='header_searchInput' type='text'/>
            <SearchIcon className='header_searchIcon'/>
        </div>

         {/** Header nav*/}
          {/**SignIn*/}
        <div 
        onClick={handleAuthentication} 
        className='header_nav'>
          <Link to={!user && '/login'}>
            <div className='header_option'>
              <span className='header_optionLineOne'>Hello Guest</span>
                <span className='header_optionLineTwo'>{
                  user ? 'Sign Out' : 'Sign In'
                }</span>
            </div>
          </Link>
           {/**Order*/}
          <div className='header_option'>
          <span className='header_optionLineOne'>Returns</span>
            <span className='header_optionLineTwo'>& Orders</span>
          </div>         
           {/**Prime*/}
          <div className='header_option'>
            <span className='header_optionLineOne'>Your</span>
            <span className='header_optionLineTwo'>Prime</span>
          </div>
           {/**Basket*/}
           <Link to="/checkout">
            <div className="header_optionBasket">
                <ShoppingBasketIcon />
                <span className="header_optionLinetTwo header_basketCount">
                  {basket?.length}
                </span>
            </div>
           </Link>
        </div>
    </div>
  )
}

export default Header;