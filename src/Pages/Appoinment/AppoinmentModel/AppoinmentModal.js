import { format } from 'date-fns';
import React from 'react';

const AppoinmentModal = ({ tretment,setTretment, selectedDate }) => {
    const { name, slots } = tretment;
    const date = format(selectedDate, 'PP');

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
            slot,
            email,
            phone
        }
        console.table(booking)
        setTretment(null)
    }
   

    return (
        <>
            <input type="checkbox" id='book-modal' className='modal-toggle' />
            <div className='modal'>
                <div className='modal-box relative'>
                    <label htmlFor="book-modal" className='btn btn-sm btn-circke absolute right-2 top-2'>X</label>
                    <h3 className='text-lg font-bold mb-8'>{name}</h3>
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
                        <input type="text" name='name' placeholder="Enter Name" className="input input-bordered w-full" />
                        <input type="text" name='email' placeholder="Email" className="input input-bordered w-full" />
                        <input type="text" name='phone' placeholder="phone no" className="input input-bordered w-full" />
                        <input type="submit" value='submit' className="btn btn-accent  w-full" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AppoinmentModal;