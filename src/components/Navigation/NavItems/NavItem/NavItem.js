import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavItem.module.css';

const NavItem = props => (
    <li className={classes.EachItem}>
        <NavLink
         to={props.link}
         exact={props.exact}
         activeClassName={classes.active}>
            {props.children}
        </NavLink>
    </li>
);

export default NavItem;