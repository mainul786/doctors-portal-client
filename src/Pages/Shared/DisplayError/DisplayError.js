import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const {logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <p className='text-red-500'>Something went is wrong!</p>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <h4><button onClick={handleLogOut}>LogOut</button> and login back!</h4>
        </div>
    );
};

export default DisplayError;