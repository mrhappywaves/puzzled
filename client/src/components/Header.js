import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
   const logout = (e) => {
       e.preventDefault();
       Auth.logout();
   };

    return (
        <div className="container">
            <div className="navbar-brand">
                <Link className="narbar-item" to="/">
                    Puzzle
                </Link>
            </div>

            <div className="navbar-item has-dropdown is-hoverable navbar-end">
                <a className="nav-link">
                    Menu
                </a>
                <div className="navbar-dropdown">
                    {Auth.loggedIn() ? (
                        <>
                            <Link className="navbar-item" to="/profile">
                                View Profile
                            </Link>
                            <Link className="navbar-item" onClick={logout}>
                                Logout
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link className="navbar-item" to="/login">
                                Login
                            </Link>
                            <Link className="navbar-item" to="/signup">
                                Signup
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;