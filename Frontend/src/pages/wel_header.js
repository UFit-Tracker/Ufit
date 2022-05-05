// import{useNavigate } from 'react-router-dom'
import{useAuth0} from '@auth0/auth0-react'

function Header({onLog, onReg}) {
    // const navigate = useNavigate();
    const {loginWithRedirect} = useAuth0()
    const {logout} = useAuth0()

    return (
        <div className="header">

            <a className="forum">Forum</a>
            <div className="login">
                <div onClick={()=>loginWithRedirect()} >Login</div>
                {/* //later the login and logout will only show one */}
                <a > / </a>
                <div onClick={()=>logout()}>Logout</div>
                
            </div>

        </div>
    )
}

export default Header