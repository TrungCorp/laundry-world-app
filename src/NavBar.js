import {NavLink} from "react-router-dom"

function NavBar()
{
    return(
     
        <nav className="navbar">
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/matchhistory">
                History
            </NavLink>
        </nav>

        
        
    )
}

export default NavBar