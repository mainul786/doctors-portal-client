import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://doctor-portal-server-iota.vercel.app/users`)
            const data = await res.json();
            return data
        }
    })

    const handleMakeAdmin = id => {
        fetch(`https://doctor-portal-server-iota.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authrization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success('Make admin successfull');
                    refetch()
                }
            })
    }


    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user, idx) => <tr key={user._id}>
                            <th>{idx + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td> {
                                user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-primary btn-xs'>Make admin</button>
                            }
                            </td>
                            <td><button className='btn btn-gost btn-xs'>Delete</button></td>
                        </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;