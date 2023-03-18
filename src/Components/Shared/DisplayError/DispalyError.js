import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const DispalyError = () => {
    const { logOut } = useContext(AuthContext)
    const error = useRouteError()
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p className='text-red-500 text-center mt-24'>Somthing went wrong !!!</p>
            <p className='text-red-400 text-4xl text-center'>{error.statusText}</p>
            <p className='text-center'>Please <span className='btn btn-sm btn-primary mt-5' onClick={handleLogOut}>Login</span> again.</p>
        </div>
    );
};

export default DispalyError;