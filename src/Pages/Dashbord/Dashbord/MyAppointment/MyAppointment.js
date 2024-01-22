import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import { useQuery } from 'react-query';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return (data)
        }
    })

    return (
        <div>
            <h1 className='text-3xl font-bold mb-4'>My Appointment</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Tretment</th>
                            <th>Phone</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, idx) => <tr key={booking._id}>
                                <th>{idx + 1}</th>
                                <td>{booking.paitentName}</td>
                                <td>{booking.tretment}</td>
                                <td>{booking.phone}</td>
                                <td>{booking.appontmentDate}</td>
                                <td>{booking.slot}</td>
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