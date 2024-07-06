import React from 'react'
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import Spinner from '../../components/Spinner';

const AdminRoutes = ({children}) => {
    const { user, userLoading } = useAuth();

    if (userLoading) {
        return <Spinner />
    }
    if(user?.userType){
        return children
    }

    return <Navigate to={"/"} />

}

export default AdminRoutes