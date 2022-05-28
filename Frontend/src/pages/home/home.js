import React, {useEffect} from 'react'
// import Header from './wel_header'
import Sidebar from './sidebar'
import { useStore } from '../../store/index'
import { observer } from 'mobx-react-lite'
import { setToken } from '@/utils'
import './home.css'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
const Home = () => {

    const { profileStore } = useStore()
    const name = profileStore.profile.accountName
    function changeName() { profileStore.changeName() }
    const navigate = useNavigate()
    const { getAccessTokenSilently } = useAuth0();


    useEffect(() => {
        
        const getnewToken= async () => {
              const accessToken = await getAccessTokenSilently();
              setToken(accessToken);
        }
        getnewToken();

        }, [getAccessTokenSilently]);
        
        

    const home = () => {
        navigate('/home', { replace: false })
    }
    const nav = () => {
        navigate('/home/profile', { replace: false })
    }

    const plan = () => {
        navigate('/home/plan', { replace: false })
    }


    //    console.log(profileStore.changeName)
    return (
        <>
            {/* <Header /> */}
            <div className='homeBody'>

                <Sidebar
                    name={name}
                    onProfile={nav}
                    onHome={home}
                    onPlan={plan} />
                <Outlet />
            </div>

        </>
    )
}

export default observer(Home)