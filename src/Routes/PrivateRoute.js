import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Components/Shared/Spinner/Spinner';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (user) {
        return children

    }

    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div>

            <Navigate to='/login' state={{ from: location }} replace></Navigate>
        </div>
    );
};

export default PrivateRoute;