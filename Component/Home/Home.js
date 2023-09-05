import React from 'react';
import Advertisement from '../Advertisement/Advertisement';
import Blog from '../Blog/Blog';
import Brands from '../Brands/Brands';
import DisplaySection from '../DisplaySection/DisplaySection';
import FeatureProducts from '../FeatureProducts/FeatureProducts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import "./Home.css";

import ShoppingCart from '../DisplaySection/Cart';
const Home = () => {

    return (
        <div>

            <Header />
            <Navbar />
            <Advertisement/>
            <DisplaySection />
            <FeatureProducts />
           
            <Brands />
            <Footer/>
        </div>
    );
};

export default Home;