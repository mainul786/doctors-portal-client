import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButtion from '../../../component/PrimaryButton/PrimaryButtion';


const MakeAppoitment = () => {

    return (
        <section className='mt-48' style={{background:`url(${appointment})`}}>
            <div className="hero" >
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctor} alt='' className="lg:w-1/2 hidden md:block -mt-32 rounded-lg shadow-2xl" />
                <div className='w-1/2'>
                    <h1 className="text-xl text-primary font-bold">Appointment</h1>
                    <p className='py-5 text-3xl text-white'>Make an appointment Today</p>
                    <p className="py-5  text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <PrimaryButtion>Appoinment</PrimaryButtion>
                </div>
            </div>
        </div>
        </section>
    );
};

export default MakeAppoitment;
