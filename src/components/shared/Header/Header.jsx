import React from 'react';
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="container__header">
            <Link to="/cart">CART</Link>
        </div>
    )
}

export default Header
