import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='container'>
            <div className='nav-container'>
            <ul className='nav'>
                <li className='active'><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </div>
        </div>
    );
};

export default Navbar;