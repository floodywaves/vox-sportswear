import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/" >homepage</NavLink>
            <NavLink to="/aboutus" >aboutus</NavLink>
            <NavLink to="/productpage" >productpage</NavLink>
        </div>
    )
}

export default Navbar;