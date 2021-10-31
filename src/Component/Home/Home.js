import React from 'react';
import Services from '../Services/Services';
import TourismCars from '../TourismCars/TourismCars';
import TourismImg from '../TourismImg/TourismImg';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <TourismImg></TourismImg>
           <TourismCars></TourismCars>
           <Footer></Footer>
        </div>
    );
};

export default Home;