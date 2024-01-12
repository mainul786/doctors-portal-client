import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppoinment = ({ selectedDate }) => {
  const [appoinmentOptions, setAppoinmentOptions] = useState([])

  useEffect(() => {
    fetch('appointmentOptions.json')
      .then(res => res.json())
      .then(data => setAppoinmentOptions(data))
  }, [])
  return (
    <section className='mt-16'>
      <div className='text-center'>
        <p className='text-secondary font-bold'>Available Services on {format(selectedDate, 'PP')}</p>
        <p className='font-bold text-accent'>Please select a service.</p>
      </div>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6'>
        {
          appoinmentOptions.map(option => <AppointmentOptions
            key={option._id}
            appointmentOption={option}
          ></AppointmentOptions>)
        }
      </div>
    </section>
  );
};

export default AvailableAppoinment;