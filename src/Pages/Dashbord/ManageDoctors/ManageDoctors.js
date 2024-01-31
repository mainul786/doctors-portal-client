import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
    const { data: doctors, isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/doctors`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })

    const handleDelete = id => {
        fetch(`http://localhost:5000/doctors/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data =>{
                if(data.data.deletedCount>1){
                    toast.success('deleted succefully');
                }
            })
    }
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-3xl'>Manage Doctors</h3>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, idx) => <tr key={doctor._id}>
                                <th>{idx + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.speciality}</td>
                                <th>
                                    <button onClick={() => handleDelete(doctor._id)} className="btn btn-error btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;