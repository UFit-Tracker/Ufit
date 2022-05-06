

import React from 'react'
import './welcome.css'


import { Outlet } from "react-router-dom";
import ufit from '../Pictures/ufit.png'

const Welcome = () => {
  
    const loginLink = "./";
    const regLink = "./"



    // const showLog = () => {
    //     setLog('show')
    //     console.log('show login box')
    //     console.log()
    // }
    // const showReg = () => {
    //     setReg('show')
    //     console.log('show reg box')
    //     console.log()
    // }


    return (
        <>
            {/* <Header
                onLog={() => showLog()}
                onReg={() => showReg()}
            /> */}
            <div className='ufitimg'>
                <img src={ufit} />
                <p>Your best fitness and diet companion</p>
            </div>
           

            <Outlet />
        </>

    )

}

export default Welcome