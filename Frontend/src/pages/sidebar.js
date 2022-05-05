import React from 'react'

const Sidebar = () => {
    return (
        <>
            {/* <div> */}
            <nav className='sidebar'>
                
                <div>Img</div>
                <div>Name</div>


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