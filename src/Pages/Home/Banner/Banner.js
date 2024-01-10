import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import PrimaryButtion from '../../../component/PrimaryButton/PrimaryButtion';

const Banner = () => {
    return (
        <div className="hero" style={{backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className=" rounded-lg shadow-2xl md:w-1/2" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts <br />Here!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButtion>GET STARTED</PrimaryButtion>
                </div>
            </div>
        </div>
    );
};

export default Banner;