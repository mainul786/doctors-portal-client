import { format } from 'date-fns';
import React, {  useState } from 'react';
import AppointmentOptions from './AppointmentOptions';
import AppoinmentModal from '../AppoinmentModel/AppoinmentModal';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppoinment = ({ selectedDate }) => {
  const [tretment, setTretment] = useState(null);
  const date = format(selectedDate, 'PP');
const {data:appointmentOptions = [], refetch, isLoading} = useQuery({
  queryKey:['appointmentOptions', date],
  queryFn: () => fetch(`https://doctor-portal-server-iota.vercel.app/appointmentOptions?date=${date}`).then(res => res.json())
})

 if(isLoading){
  return <Loading></Loading>
 }

  return (
    <section className='mt-16'>
      <div className='text-center'>
        <p className='text-secondary font-bold'>Available Services on {format(selectedDate, 'PP')}</p>
        <p className='font-bold text-accent'>Please select a service.</p>
      </div>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6'>
        {
          appointmentOptions.map(option => <AppointmentOptions
            key={option._id}
            appointmentOption={option}
            setTretment={setTretment}
          ></AppointmentOptions>)
        }
      </div>
     {tretment &&  <AppoinmentModal
      tretment = {tretment}
      setTretment = {setTretment}
      selectedDate = {selectedDate}
      refetch = {refetch}
      ></AppoinmentModal>}
    </section>
  );
};

export default AvailableAppoinment;