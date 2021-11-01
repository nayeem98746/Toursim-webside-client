import React from 'react';
import ImagesTourist from '../ImagesTourist/ImagesTourist';
import Services from '../Services/Services';
import TourismCars from '../TourismCars/TourismCars';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <ImagesTourist></ImagesTourist>
           <TourismCars></TourismCars>
           <Footer></Footer>
        </div>
    );
};

export default Home;