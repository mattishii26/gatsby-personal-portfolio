import React from 'react';
import { Link } from 'gatsby';
import Data from '../data';
import headerStyle from './header.module.scss';

import {
    Navbar,
    Nav,
} from 'react-bootstrap';

const Header = () => {
    return (
        <div className={headerStyle.header}>
            <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand className={headerStyle.headerTitle}>
                <Link to='/' className={headerStyle.headerLink}>
                >{
                Data.whoAmI
            }<span className={headerStyle.blinkHeader}>_</span>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {
                        Data.links.map(link => {
                            return headerItem(link);
                        })
                    }
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>

    )
}

const headerItem = (link) => {
    return (
        <Nav.Item className={headerStyle.headerNavItem}>
            <Link to={link.path} className={headerStyle.headerLink} activeClassName={headerStyle.headerLinkActive}>{link.name}</Link>
        </Nav.Item>
    )
}

export default Header;