import React, { Component } from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";

class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
                <h2>AccountiBuddy</h2>
                <div className="navLinks">
                    <Link className="navLink" to={routes.HOME}>Home</Link>
                    <Link className="navLink" to={routes.PROFILE}>Profile</Link>
                    <Link className="navLink" to={routes.SEARCH}>Search</Link>
                    <Link className="navLink" to={routes.LOGIN}>Login</Link>
                    <Link className="navLink" to={routes.SIGNUP}>Signup</Link>
                </div>
            </div>
        )
    }
}

export default Navbar;