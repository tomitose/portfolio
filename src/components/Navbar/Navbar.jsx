import React from 'react';
import Link from '@mui/material/Link';
import { Avatar } from '@material-ui/core';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='container-nav'>
        <nav className='nav'>
            <div className='nav-left'>
                <ul>
                    <Avatar alt="Material UI logo" src="./vite.svg" />                    <Link>Home</Link>
                    <Link>Works</Link>
                    <Link>Contact</Link>
                </ul>
            </div>
            <div className='nav-right'>

            </div>
        </nav>    
    </div>
  )
}

export default Navbar