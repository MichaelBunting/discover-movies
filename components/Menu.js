import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
    return (
        <div className="menu">
            <div className="menu__logo">
                <strong>Discover</strong>Movies
            </div>

            <ul className="menu__list">
                <li>
                    <Link to="/" className="menu__element">Movies</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;
