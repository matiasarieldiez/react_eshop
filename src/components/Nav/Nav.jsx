import Styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className={Styles.Bar}>
            <NavLink to="/" className={Styles.Link}>
                Home
            </NavLink>
            <NavLink to="/cart" className={Styles.Link}>
                Cart
            </NavLink>
        </nav>
    );
};

export default Nav;
