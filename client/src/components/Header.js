import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

import Auth from '../utils/auth';

const Header = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <div className='navbar navbar-expand-lg navbar-light'>
            <div className='navbar-brand'>
                <Link className='navbar-brand' to='/'>
                    <img src='https://www.kindpng.com/picc/m/419-4193772_jigsaw-puzzles-set-computer-icons-transparent-puzzle-piece.png' className='d-inline-block logo' alt='logo' style={{ height: '55px' }} />
                    Puzzled
                </Link>
            </div>

            <div className='nav-menu' onClick={handleClick}>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-link'>Home</Link>
                    </li>
                    {Auth.isLoggedIn() ? (
                        <>
                            <li className='nav-item'>
                                <Link to='/manage' className='nav-link'>Manage</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/login' className='nav-link' onClick={logout}>Logout</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className='nav-item'>
                                <Link to='/login' className='nav-link'>Login</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Header;