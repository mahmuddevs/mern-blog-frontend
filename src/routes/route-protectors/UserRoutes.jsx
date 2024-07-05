import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Navigate } from 'react-router-dom'

const UserRoutes = ({children}) => {
    const { user, userLoading } = useAuth();

    if (userLoading) {
        return <Spinner />
    }
    if(user){
        return children
    }

    return <Navigate to='/' />;
}

export default UserRoutes