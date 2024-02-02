import React from 'react';

const AppointmentOptions = ({ appointmentOption, setTretment }) => {
    const { name, slots, price } = appointmentOption;
    
    return (
        <div className="card  shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Anoter day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Avalable</p>
                <p>Price: {price}</p>
                <div className="card-actions justify-end">
                   <label htmlFor='book-modal' 
                   disabled = {slots.length === 0}
                   onClick={()=>setTretment(appointmentOption)}
                   className='btn btn-secondary text-white'>Booking Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;