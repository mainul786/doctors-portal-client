import React from 'react';
import whitening from '../../../../assets/images/whitening.png';
import cavity from '../../../../assets/images/cavity.png';
import fluoride from '../../../../assets/images/fluoride.png';
import ServiceCard from './ServiceCard';

const ServicesCard = () => {
    const serviceData = [
        {
            id:1,
            image:whitening,
            name:'Fluoride Treatment',
            details:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the.'
        },
        {
            id:1,
            image:cavity,
            name:'Cavity Filling',
            details:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the.'
        },
        {
            id:3,
            image:fluoride,
            name:'Teeth Whitening',
            details:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the.'
        },
    ]
    return (
       <div className='mt-24 '>
        <div className='mb-24 text-center'>
        <p className='text-primary text-xl mb-2 font-bold'>OUR SERVICES</p>
        <h4 className='text-4xl'>Services We Provide</h4>
        </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                serviceData.map(service => <ServiceCard
                key={service.id}
                service={service}
                ></ServiceCard>)
            }
        </div>
       </div>
    );
};

export default ServicesCard;