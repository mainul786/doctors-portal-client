import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const AppoinmentModal = ({ tretment,setTretment, selectedDate, refetch }) => {
    const { name: tretmentName, slots } = tretment;
    const date = format(selectedDate, 'PP');
    const {user} = useContext(AuthContext);

    const handleBooking = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.phone.value;
        
        const booking = {
            appontmentDate: date,
            paitentName: name,
            tretment: tretmentName,
            slot,
            email,
            phone
        }
        

        fetch(`http://localhost:5000/bookings`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        if(data.acknowledged){
            setTretment(null)
            toast.success('Appointment Successfull');
            refetch();
        }else{
            toast.error(data.message)
        }
        })
    }
   

    return (
        <>
            <input type="checkbox" id='book-modal' className='modal-toggle' />
            <div className='modal'>
                <div className='modal-box relative'>
                    <label htmlFor="book-modal" className='btn btn-sm btn-circke absolute right-2 top-2'>X</label>
                    <h3 className='text-lg font-bold mb-8'>{tretmentName}</h3>
                    <form className='grid grid-cols-1 gap-3' onSubmit={handleBooking}>
                        <input type="text" value={date} disabled className="input input-bordered w-full " />
                        <select name='slot' className="select select-bordered w-full ">
                           
                           {
                            slots.map((slot, idx )=> <option 
                                value={slot}
                                key = {slot.idx}
                                >{slot}</option> )
                           }
                        </select>
                        <input type="text" name='name' defaultValue={user?.displayName} disabled placeholder="Enter Name" className="input input-bordered w-full" />
                        <input type="text" name='email' defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full" />
                        <input type="text" name='phone' placeholder="phone no" className="input input-bordered w-full" />
                        <input type="submit" value='submit' className="btn btn-accent  w-full" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AppoinmentModal;