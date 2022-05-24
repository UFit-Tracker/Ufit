import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Sidebar = ({ name, onProfile, onHome, onPlan }) => {
    // console.log(name);
    return (
        <>
            {/* <div> */}
            {/* <Router> */}
                <nav className='sidebar'>

                    <div className='img'></div>
                    <div className='account'>{name}</div>


                    <ul className='menu'>
                        <li onClick={onHome}>Home</li>
                        <li onClick={onProfile}>Profile</li>
                        <li onClick={onPlan}>Plan</li>
                        <li >Datas
                            <ul className='liul'>
                                <li>Sports</li>
                                <li>Diet</li>
                            </ul>
                        </li>
                        <li>Settings</li>
                        <li>Exit</li>


                    </ul>



                    {/* </div> */}

                </nav>
            {/* </Router> */}
        </>
    )
}

export default Sidebar