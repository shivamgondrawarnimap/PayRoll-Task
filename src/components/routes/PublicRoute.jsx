import React from 'react';
import { Navigate} from 'react-router-dom';
import { getToken } from '../../utils/utils';

const PublicRoute = ({ component: Component }) => {
    return (
        getToken() ? <Component /> : <Navigate to="/" /> 
    )
}
 
export default PublicRoute;