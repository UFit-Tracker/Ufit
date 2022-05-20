import React from 'react'
import Sidebar from './sidebar'
import { useStore } from '../store/indexStore'
import { observer } from 'mobx-react-lite'
import './home.css'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Home = () => {

    const { profileStore } = useStore()
    const name = profileStore.profile.accountName
    function changeName() { profileStore.changeName() }
    const navigate = useNavigate()

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
            <div className='homeBody'>
                <Sidebar
                    name={name}
                    onProfile={nav} 
                    onHome={home}
                    onPlan = {plan} />
                <Outlet />
            </div>

        </>
    )
}

export default observer(Home)