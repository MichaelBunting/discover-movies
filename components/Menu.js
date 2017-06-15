import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
    return (
        <div className="menu">
            <Link to="/" className="menu__logo">
                <div className="menu__logo-img">
                    <img src="/img/video-camera.svg" />
                </div>
                <span className="menu__logo-text">
                    <strong>Discover</strong>Movies
                </span>
            </Link>
        </div>
    )
}

export default Menu;
