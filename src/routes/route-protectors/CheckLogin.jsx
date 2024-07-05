import Spinner from '../../components/Spinner';
import { Navigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const UserLoggedIn = ({children}) => {
    const { user, userLoading } = useAuth();

    if (userLoading) {
        return <Spinner />
    }
    if(!user){
        return children
    }

    return <Navigate to='/' />;
}

export default UserLoggedIn