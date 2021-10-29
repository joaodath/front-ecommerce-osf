import React from 'react'
import Searchbar from "../Searchbar/Searchbar"

function Navbar() {
    return (
        <div className="container__navbar">
            <div className="wrapper__logo">
                <h1>Bookstore</h1>
            </div>
            <div className="wrapper__searchbar">
        	    <Searchbar/>
            </div>
            <div className="wrapper__userBtn">

            </div>
            <div className="wrapper__shoppingCart">

            </div>
        </div>
    )
}

export default Navbar
