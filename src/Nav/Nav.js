import React from 'react';
import './Nav.css';
import {Routes, Route, Link} from "react-router-dom";
import {useAuthContext} from "../useAuthContext";


const Nav = () => {
    const {user} = useAuthContext()
    return (
    <>
        <div className="header-nav">
            <div className="container">
                <nav>
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/exchange">Пункты обмена</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                        <li><Link to="/news1">Новости</Link></li>
                        <li><Link to="/news">Новости экономики</Link></li>
                        <li><Link to="/blog">Блог</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </>
    );

}

export default Nav;
