// import{useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useState, useEffect } from 'react'
import { useStore } from '@/store'
import { getToken } from '@/utils/index'



function Header({ onLog, onReg }) {
    // const navigate = useNavigate();
    const { profileStore } = useStore()
    const { loginWithRedirect } = useAuth0()
    const { logout } = useAuth0()
    // const [log, setLog] = useState(true)
    // useEffect(()=>{
    //     profileStore.getLog()
    //     },[profileStore])
    const { getToken } = useAuth0()


    const log = true

    return (
        // isAuthenticated && (
        <div className="header">

            <a className="forum">Forum</a>
            <div className="login">
                {/* <div className={`logbox ${profileStore.log?'show':'hide'}`} onClick={()=>loginWithRedirect()} >Login</div>
                <div className={`logbox ${profileStore.log?'hide':'show'}`} onClick={()=>logout()}>Logout</div> */}
                <div className={`logbox ${log ? 'hide' : 'show'}`} onClick={() => loginWithRedirect()} >Login</div>
                <div className={`logbox ${log ? 'show' : 'hide'}`} onClick={() => logout()}>Logout</div>
                <div>{getToken}</div>
            </div>
            {/* <div>{user.name}</div> */}

        </div>
    )
    // )
}

export default Header