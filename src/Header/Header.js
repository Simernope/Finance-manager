import React from 'react';
import './Header.css';
import Nav from "../Nav/Nav";
import {Link} from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {useLogout} from '../useLogout'
import {useAuthContext} from "../useAuthContext";

// npm install --save react-router-dom

const Header = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext()

    return (
        <header>
            <nav className={'navbar-1'}>
                <ul>
                    <li className={'title-1'}><Link to="/">UrFU REACT</Link></li>
                    {!user &&(
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Signup</Link></li>
                        </>
                    )}
                    {user && (
                        <>
                            <li>Добро пожаловать, {user.displayName} </li>
                            <button onClick={logout}>Logout</button>
                        </>
                    )}
                </ul>
                <Nav/>
            </nav>

        </header>
    );
  }


export default Header;
