import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const url = `https://doctor-portal-server-iota.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url,{
                headers:{
                    authorization: `bearer ${localStorage.getItem('accessToken')}` 
                }
            })
            const data = await res.json();
            return (data)
        }
    })

    return (
        <div>
            <h1 className='text-3xl font-bold mb-4'>My Appointment</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Tretment</th>
                            <th>Phone</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        { bookings && 
                            bookings?.map((booking, idx) => <tr key={booking?._id}>
                                <th>{idx + 1}</th>
                                <td>{booking?.paitentName}</td>
                                <td>{booking?.tretment}</td>
                                <td>{booking?.phone}</td>
                                <td>{booking?.appontmentDate}</td>
                                <td>{booking?.slot}</td>
                                {
                                    booking.price &&
                                     !booking.paid && 
                                    <Link to={`/dashboard/payment/${booking._id}`}> <button className='btn btn-primary btn-sm'>Pay Now</button></Link>
                                }
                                {
                                    booking.price 
                                    && booking.paid 
                                    && <span className='text-primary'>Paid</span>
                                }
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;