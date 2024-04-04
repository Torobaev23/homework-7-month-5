import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink  to="/posts">Все посты</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;