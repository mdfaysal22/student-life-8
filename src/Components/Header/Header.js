import React from 'react';
import './Header.css';
import logo from '../img/logo.png';

const Header = () => {
    return (
        <header>
            <div className="navbar  bg-green-200">
                <div className="flex-1">
                <img className='w-16' src={logo} alt="" />
                <h2 className='text-2xl text-green-700	 font-bold'>Student Life</h2>
                </div>
                <div className="flex-none">
                    <ul className="flex item-center">
                    <li className='px-4 font-semibold text-green-600'><a>Home</a></li>
                    <li className='px-4 font-semibold text-green-600'><a>About</a></li>
                    <li className='px-4 font-semibold text-green-600'><a>Profile</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;