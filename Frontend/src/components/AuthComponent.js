import React from 'react';
import {Navigate} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function AuthComponent ({ children}){
    const {isAuthenticated } = useAuth0()
    // const isToken = getToken()
    if(isAuthenticated){
        return <>{children}</>

    }else {
        return <Navigate to='/' replace />
    }
}

export {
    AuthComponent
}

{/* <AuthComponent>here is the children</AuthComponent> */}
