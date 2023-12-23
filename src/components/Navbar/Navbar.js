import React from 'react'
import '../Navbar/Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='main-navbar'>
                <div className='left-navbar'>
                    Rohit R
                </div>
                <div className='middle-navbar'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>services</li>
                        <li>contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar