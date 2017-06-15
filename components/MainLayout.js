import React from 'react';

import Menu from './Menu';

const MainLayout = (props) => {
    window.scrollTo(0, 0);

    return (
        <div>
            <Menu />

            {props.children}
        </div>
    )
}

export default MainLayout;
