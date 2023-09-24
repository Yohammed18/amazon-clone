import React from 'react'
import './Home.css'
import Product from '../Product/Product'

function Home() {
  return (
    <div className='home'>
        <div className="home_container">
            <img className='home_img' src="https://cdn.mobilesyrup.com/wp-content/uploads/2022/07/Watch-party-header-amazon-1024x573.jpg" 
                alt="" />
            
            {/**Render products in multiple rows */}
            <div className="home_row">
                <Product
                id='1623092'
                title='Think and Grow Rich: The Landmark Bestseller Now Revised and Updated for the 21st Century'
                image='https://m.media-amazon.com/images/I/71UypkUjStL._SY342_.jpg'
                price={19.99}
                rating={5}
                />
                <Product
                id='4004771' 
                title='Keurig 5000204976 K-Duo Essentials 2-in-1 Coffee Maker for K-Cup Pods/12-Cup Carafe (Renewed)'
                image='https://m.media-amazon.com/images/I/61dK-Bgo78L.__AC_SX300_SY300_QL70_FMwebp_.jpg'
                price={99.95}
                rating={4}
                />
            </div>
            <div className="home_row">
                <Product
                id='6331719' 
                title='New Universal Remote for All Samsung TV Remote, Replacement Compatible for All Samsung Smart TV'
                image='https://m.media-amazon.com/images/I/712Qq7saTlL._AC_SY355_.jpg'
                price={13.97}
                rating={2}
                />
                <Product
                id='0499343' 
                title='SESENO. 12 Pack Shoe Storage Boxes, Clear Plastic Stackable Shoe Organizer Bins, Drawer Type Front Opening Shoe Holder Containers'
                image='https://m.media-amazon.com/images/I/71nIxdtkM6L._AC_SY355_.jpg'
                price={36.99}
                rating={2}
                />
                <Product
                id='7572333' 
                title="Troadlop Men's Running Shoes Non Slip Shoes"
                image='https://m.media-amazon.com/images/I/615V+J89ulL._AC_UY395_.jpg'
                price={234.98}
                rating={1}
                />
            </div>
            <div className="home_row">
                <Product 
                id='4666909'
                title='SAMSUNG 40-inch Class LED Smart FHD TV 1080P (UN40N5200AFXZA, 2019 Model)'
                image='https://m.media-amazon.com/images/I/915Xj2rO8WL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
                price={247.99}
                rating={3}
                />
            </div>
        </div>
    </div>
  )
}

export default Home