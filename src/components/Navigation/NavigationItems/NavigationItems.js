import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItems.module.css';


const navigationitems = (props) => {
	return (

		<li>
			<NavLink
				activeClassName={classes.active}
			 	to={props.link}
				exact={props.exact}>
				{props.children}
			</NavLink>
		</li>

		);
};

export default navigationitems;
