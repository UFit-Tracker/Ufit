import React, {useEffect} from 'react'
// import Header from './wel_header'
import Sidebar from '@/components/siderbar'
import { useStore } from '../../store/index'
import { observer } from 'mobx-react-lite'
import { setToken } from '@/utils'
import './my-page.css'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Header from '@/components/header'
const MyPage = () => {

    const { profileStore } = useStore()
    const name = profileStore.profile.accountName
    function changeName() { profileStore.changeName() }
    const navigate = useNavigate()
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();


    useEffect(() => {
        
        const getnewToken= async () => {
              const accessToken = await getAccessTokenSilently();
              setToken(accessToken);
        }
        getnewToken();

        }, [getAccessTokenSilently]);
        
        

    const home = () => {
        navigate('/dev', { replace: false })
    }
    const nav = () => {
        navigate('profile', { replace: false })
    }

    const plan = () => {
        navigate('plan', { replace: false })
    }


    //    console.log(profileStore.changeName)
    return (
        <>
            {/* <Header /> */}
            
            <div className='mypage'>
           

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

export default observer(MyPage)
