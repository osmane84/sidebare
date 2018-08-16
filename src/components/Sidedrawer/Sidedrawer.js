import React from 'react';

import './Sidedrawer.css';

const Sidedrawer = props =>{ 
    let DrawerClasses = 'side-drawer'

    if(props.show){
        DrawerClasses = 'side-drawer open-drawer'
    }
    return(    
        <nav className={DrawerClasses}>
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
            </ul>
        </nav>
    );
};

export default Sidedrawer;