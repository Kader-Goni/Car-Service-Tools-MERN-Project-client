import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Barand from './Barand';
import BusnessSummery from './BusnessSummery';
import Review from './Review';
import Tools from './Tools';


const Home = () => {
    return (
        <>
        <Banner></Banner>
        <div className='mx-4 md:mx-8 lg:mx-16'>
            <Tools></Tools>
            <Review />
            <BusnessSummery />
            <Barand />
        </div>
        {/* <Footer /> */}
        </>
    );
};

export default Home;