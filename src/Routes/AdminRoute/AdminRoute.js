import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if(loading || isAdminLoading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user && isAdmin){
        return  children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoute;