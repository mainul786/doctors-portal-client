import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ConfarmationModal from '../../Shared/ConfarmationModal/ConfarmationModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal = () => {
        setDeletingDoctor(null);
    }
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://doctor-portal-server-iota.vercel.app/doctors`, {
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

   

    const handleDelete = doctor => {
        fetch(`https://doctor-portal-server-iota.vercel.app/doctors/${doctor._id}`, {
            method: "DELETE",
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.data.deletedCount > 0) {
                    refetch();
                    toast.success('deleted succefully');
                }
            })
    }

    if (isLoading) {
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
                                                <img src={doctor?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor?.name}</td>
                                <td>{doctor?.email}</td>
                                <td>{doctor?.speciality}</td>
                                <th>
                                    <label htmlFor='confirmModal' className="btn btn-error btn-xs" onClick={() => setDeletingDoctor(doctor)}> Delete</label >
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
            {
                deletingDoctor && <ConfarmationModal
                    title={`Are you sure you want to delete?`}
                    message={`if you delete ${deletingDoctor.name}. It cannot be undone`}
                    successAction={handleDelete}
                    modalData={deletingDoctor}
                    closeModal={closeModal}
                ></ConfarmationModal>
            }
        </div>
    );
};

export default ManageDoctors;