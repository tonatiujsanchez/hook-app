import { Link, NavLink } from "react-router-dom"


export const Navbar = () => {
    return (
            <nav className="px-3 py-2 text-bg-dark bg-dark rounded">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <NavLink to={'/'} className="navbar-brand text-light">
                        useContext
                    </NavLink>

                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                        <li>
                            <NavLink 
                                to={"/"} 
                                className={ ({ isActive })=> `nav-link fw-semibold ${ isActive ? 'text-secondary':'text-white' }` }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to={"/about"} 
                                className={ ({ isActive })=> `nav-link fw-semibold ${ isActive ? 'text-secondary':'text-white' }` }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to={"/login"} 
                                className={ ({ isActive })=> `nav-link fw-semibold ${ isActive ? 'text-secondary':'text-white' }` }
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}
