// import{useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useState, useEffect } from 'react'
import { useStore } from '@/store'
import { getToken } from '@/utils/index'
import { useNavigate, useLocation } from 'react-router-dom'



function Header({ onLog, onReg }) {

    const navigate = useNavigate();
    const { profileStore } = useStore()
    const { loginWithRedirect, isAuthenticated } = useAuth0()
    const { logout } = useAuth0()
    const log = true
    const mypage = () => {
        navigate('/my', { replace: false })
    }
    const homepage = () => {
        navigate('/', { replace: false })
    }
    const location = useLocation()
    const homepath = location.pathname.substring(0,3)
    console.log(homepath)
    console.log((isAuthenticated && homepath!=='/my'))
   

    return (
        

        // isAuthenticated && (
        <div className="header">

            <a className="forum">Forum</a>
            <div className="login">
                {/* <div className={`logbox ${profileStore.log?'show':'hide'}`} onClick={()=>loginWithRedirect()} >Login</div>
                <div className={`logbox ${profileStore.log?'hide':'show'}`} onClick={()=>logout()}>Logout</div> */}
                <div className={`logbox ${isAuthenticated ? 'hide' : 'show'}`} onClick={() => loginWithRedirect()} >Login</div>
                <div className={`logbox ${isAuthenticated ? 'show' : 'hide'}`} onClick={() => logout()}>Logout</div>
                <div className={`logbox ${(isAuthenticated && homepath==='/my') ? 'show' : 'hide'}`} onClick={() => homepage()}>Home</div>
                <div className={`logbox ${(isAuthenticated && homepath!=='/my') ? 'show' : 'hide'}`} onClick={() => mypage()}>My Ufit</div>

                {/* <div>{getToken}</div> */}
            </div>
            {/* <div>{user.name}</div> */}

        </div>
        
    )
    // )
}

export default Header