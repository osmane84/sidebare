import React from 'react';

import './Toolbar.css';
import DrawerToggleButton from '../Sidedrawer/DrawerToggleButton';

const Toolbar = props => (
    <header  className="toolbar">
        <nav className="toolbar-navigation">
            <DrawerToggleButton click={props.DrawerClickHandler}/>
            <div className="toolbar-logo">
                <a href="/">LOGO</a>
            </div>
            <div className="spacer"/>
            <div className="toolbar-navigation-items">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;