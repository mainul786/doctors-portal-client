import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const testimonialData = [
        {
            id:1,
            name:'Winson Herry',
            img:people1,
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location:'California'
        },
        {
            id:2,
            name:'Sonamuni',
            img:people2,
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location:'California'
        },
        {
            id:3,
            name:'Najiya Islam',
            img:people3,
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location:'California'
        },
    ]
    return (
        <section className='my-16'>
           <div className='flex justify-between'>
            <div>
                <p className='text-primary'>Testimonial</p>
                <h4 className='text-3xl'>What Our Patients Says</h4>
            </div>
            
                <figure>
                    <img src={quote} alt='' className='w-24 lg:w-48' />
                </figure>
           
           </div>
           <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           {
            testimonialData.map(testimonial => <Testimonial
            key={testimonial.id}
            testimonial={testimonial}
            ></Testimonial>)
           }
           </div>
        </section>
    );
};

export default Testimonials;