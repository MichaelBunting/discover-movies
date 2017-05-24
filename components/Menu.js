import React from 'react';

const Menu = (props) => {
    return (
        <div className="menu">
            <div className="menu__logo">
                <strong>Discover</strong>Movies
            </div>

            <ul className="menu__list">
                <li>
                    <a href="#" className="menu__element active">Movies</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu;
