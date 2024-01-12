import React from 'react';

const AppointmentOptions = ({appointmentOption}) => {
        const {name, slots} = appointmentOption;
       
    return (
        <div className="card  shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl text-secondary">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : 'Try Anoter day'}</p>
          <p>{slots.length} {slots.length > 1 ? 'spaces': 'space'} Avalable</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-white">Book Appoinment</button>
          </div>
        </div>
      </div>
    );
};

export default AppointmentOptions;