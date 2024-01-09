import React from 'react';

const ServiceCard = ({service}) => {
    const {name, image, details} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 p-6 shadow-xl">
        <figure>
            <img src={image} alt="" />
            </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title ">{name}</h2>
          <p>{details}</p>
        </div>
      </div>
    );
};

export default ServiceCard;