// import{useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useState, useEffect } from 'react'
import { useStore } from '@/store'
import { getToken } from '@/utils/index'
import { useNavigate } from 'react-router-dom'



function Header({ onLog, onReg }) {

    const navigate = useNavigate();
    const { profileStore } = useStore()
    const { loginWithRedirect, isAuthenticated } = useAuth0()
    const { logout } = useAuth0()
    const log = true
    const home = () => {
        navigate('/home', { replace: false })
    }

    return (
        

        // isAuthenticated && (
        <div className="header">

            <a className="forum">Forum</a>
            <div className="login">
                {/* <div className={`logbox ${profileStore.log?'show':'hide'}`} onClick={()=>loginWithRedirect()} >Login</div>
                <div className={`logbox ${profileStore.log?'hide':'show'}`} onClick={()=>logout()}>Logout</div> */}
                <div className={`logbox ${isAuthenticated ? 'hide' : 'show'}`} onClick={() => loginWithRedirect()} >Login</div>
                <div className={`logbox ${isAuthenticated ? 'show' : 'hide'}`} onClick={() => logout()}>Logout</div>
                <div className={`logbox ${isAuthenticated ? 'show' : 'hide'}`} onClick={() => home()}>home</div>
                {/* <div>{getToken}</div> */}
            </div>
            {/* <div>{user.name}</div> */}

        </div>
    )
    // )
}

export default Header