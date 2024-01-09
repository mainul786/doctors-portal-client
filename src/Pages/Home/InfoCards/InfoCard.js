import React from 'react';

const InfoCard = ({card}) => {
    const {name, description, bgClass, image} = card;
    return (
        <div className={`card md:card-side ${bgClass} text-white p-6 shadow-xl`}>
            <figure><img src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default InfoCard;