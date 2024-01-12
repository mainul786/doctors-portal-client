import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import bg from '../../../assets/images/bg.png';

const AppoinmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <header className="my-6" style={{background:`url(${bg})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='dentail chair' className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-6'>
                        <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        />
                    
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppoinmentBanner;