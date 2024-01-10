import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import ServicesCard from '../Services/ServicesCard/ServicesCard';
import DentalCare from '../DentalCare/DentalCare';
import MakeAppoitment from '../MakeAppoitment/MakeAppoitment';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <ServicesCard></ServicesCard>
           <DentalCare></DentalCare>
           <MakeAppoitment></MakeAppoitment>
           <Testimonials></Testimonials>
           <Contact></Contact>
        </div>
    );
};

export default Home;