import {NavLink} from "react-router-dom";

const Nav = () => {
    const navLinks = ['Dashboard', 'Users', 'Albums'];

    return (
        <ul className='link'>
            {navLinks.map((navLink, index) => (
                    <li key={index}>
                        <NavLink className='link' exact to={navLink === 'Dashboard' ? '/' : navLink}>{navLink}</NavLink>
                    </li>
                )
            )}
        </ul>
    )
}

export default Nav;