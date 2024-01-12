import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButtion from '../../../component/PrimaryButton/PrimaryButtion';

const Contact = () => {
    return (
        <section className='text-center py-16' style={{background:`url(${appointment})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
           <p className='text-xl text-primary'>Contact Us</p>
           <p className='text-2xl text-white'>Stay connected with us</p>
           <div className='flex justify-center mt-8'>
           <div className="card items-center max-w-sm">
           <form className="card-body">
        <div className="form-control">
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Subject" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
        </div>
        <div className="form-control mt-6">
         <PrimaryButtion>Submit</PrimaryButtion>
        </div>
      </form>
      </div>
           </div>
        </section>
    );
};

export default Contact;