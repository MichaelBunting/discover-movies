import React from 'react';

import Menu from './Menu';

const MainLayout = (props) => {
    return (
        <div>
            <Menu />

            {props.children}
        </div>
    )
}

export default MainLayout;
