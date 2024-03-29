import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id:1,
            name:'Opening Hours',
            description:'Lorem Ipsum is simply dummy text of the pri',
            image:clock,
            bgClass:'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id:2,
            name:'Visit our location',
            description:'Brooklyn, NY 10036, United States',
            image:marker,
            bgClass:' bg-accent'
        },
        {
            id:3,
            name:'Contact us now',
            description:'+917001261273',
            image:phone,
            bgClass:' bg-gradient-to-r from-primary to-secondary'
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            {
                cardData.map(card => <InfoCard
                key={card.id}
                card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;