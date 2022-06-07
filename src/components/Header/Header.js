import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <Navbar />
            <h2>Header</h2>
        </div>
    );
};

export default Header;