import React from 'react'
import Sidebar from './sidebar'
import { useStore } from '../store/indexStore'
import { observer } from 'mobx-react-lite'
import './home.css'
const Home = () => {
    const { loginStore } = useStore()
    const name = loginStore.profile.accountName

   
    return (
        <>
        <Sidebar name={name}/>   
        <div>
        
            </div>         
        </>
    )
}

export default observer(Home)