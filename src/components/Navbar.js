import "./Navbar.css";
import {Link} from "react-router-dom";

import React from "react";
const Navbar = ()=>{
    return(
        <div className="header">
            {/* inside link we have to add path (to=..)*/}
           <Link to="/">
            <h1>Hi I am Samiksha!</h1>
            </Link> 

            {/* Creating navLinks ... unorderlist list tag and then link*/}
            <ul className= "nav-menu">
                <li>
                    <Link to= "/Home">Home</Link>
                </li>
                <li>
                <Link to= "/About">About</Link>
                </li>
                <li>
                <Link to= "/Project">Project</Link>
                </li>
                <li>
                <Link to= "/Contact">Contact</Link>
                </li>
            </ul>

        </div>
    );
}

export default Navbar;
