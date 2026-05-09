import { NavLink } from "react-router-dom";

function Navbar() {

    return (

        <header className="navbar">

            <div className="navbar-container">

                <NavLink
                    to="/"
                    className="logo"
                >
                    ExpertConnect
                </NavLink>

                <nav className="nav-links">

                    <NavLink
                        to="/"
                        className="nav-link"
                    >
                        Experts
                    </NavLink>

                    <NavLink
                        to="/my-bookings"
                        className="nav-link"
                    >
                        My Bookings
                    </NavLink>

                </nav>

            </div>

        </header>
    );
}

export default Navbar;