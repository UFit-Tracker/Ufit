

import React from 'react'
import './welcome.css'
// import Header from './wel_header';


import { Outlet } from "react-router-dom";
import ufit from '@/Pictures/ufit.png'
import Header from '@/components/header';

const Welcome = () => {
  

    return (
        <>
            {/* <Header
                onLog={() => showLog()}
                onReg={() => showReg()}
            /> */}
            {/* <Header/> */}
            {/* <Header/> */}
            <div className='ufitimg'>
                
                <img src={ufit} />
                <p>Your best fitness and diet companion</p>
            </div>
           

            <Outlet />
        </>

    )

}

export default Welcome