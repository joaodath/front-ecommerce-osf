import React from 'react';
import MenuButton from '../../structure/MenuButton/MenuButton';
import HeaderBar from './HeaderBar'


function Header() {
    return (
        <div className="container__header">
            <HeaderBar/>
            <MenuButton/>
            
        </div>
    )
}

export default Header
