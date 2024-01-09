import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import ServicesCard from '../Services/ServicesCard/ServicesCard';
import DentalCare from '../DentalCare/DentalCare';

const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <ServicesCard></ServicesCard>
           <DentalCare></DentalCare>
        </div>
    );
};

export default Home;