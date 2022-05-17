import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import './SideNav.scss'
// Data
import { content, navlinks } from "./data";
// Components 
import {UserButton} from "../../components"

const SideNav = () => {
    return (
        <aside className='Sidenav'>
            <header>
                Logo
            </header>
            <menu className="nav-menu">
                {navlinks.map(navlink =>
                    <Link to={navlink.link} className="menu_link" key={navlink.id}>
                        <span className="slug">{navlink.title}</span>
                        {navlink.icon}
                    </Link>
                    )}
            </menu>
            <footer>
                <UserButton/>
            </footer>
        </aside >
    );
};

export default SideNav;