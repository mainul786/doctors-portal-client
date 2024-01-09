import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const DentalCare = () => {
    return (
        <div className="hero mt-20">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} className="max-w-sm rounded-lg md:w-1/2 shadow-2xl" alt='' />
    <div className='md:w-1/2 md:ml-24'>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6 text-lg">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
      <button className="btn btn-primary text-white">GET STARTED</button>
    </div>
  </div>
</div>
    );
};

export default DentalCare;