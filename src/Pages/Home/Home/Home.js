import React from 'react';
import Contact from '../../Contact/Contact';
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
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;