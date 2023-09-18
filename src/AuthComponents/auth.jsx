import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
const useAuthenticate = () => {
    return true;
}
const Auth = () => {
    const isAuthenticatie = useAuthenticate();
    return isAuthenticatie ? <Outlet /> : <Navigate to="/" />

}

export default Auth
