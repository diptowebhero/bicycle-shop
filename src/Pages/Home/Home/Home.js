import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
const Home = () => {
    return (
        <div className="">
            <Navigation></Navigation>
            <Banner></Banner>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;