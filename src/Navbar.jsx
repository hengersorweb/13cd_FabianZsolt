import React from "react";
import {Link, NavLink} from "react-router-dom";

const Navbar = (() => {

    return(
        <div>
            <nav>
                <Link to='/'>Főoldal</Link>
                <NavLink to='/ermesek'>Az olimpia érmesei</NavLink>
                <NavLink to='/mermesek'>Az magyar érmesek</NavLink>
            </nav>


        </div>
    )
}
)
export default Navbar