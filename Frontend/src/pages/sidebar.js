import React from 'react'

const Sidebar = ({name}) => {
    // console.log(name);
    return (
        <>
            {/* <div> */}
            <nav className='sidebar'>
                
                <div className='img'></div>
                <div className='account'>{name}</div> 


                <ul className='menu'>


                    <li>Profile</li>
                    <li>Plan</li>
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

        </>
    )
}

export default Sidebar