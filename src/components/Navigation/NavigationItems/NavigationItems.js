import React from 'react';
import { NavLink } from 'react-router-dom';


const navigationitems = (props) => {
	return (

		<li>
			<NavLink
				activeClassName={props.selected}
			 	to={props.link}
				exact={props.exact}>
				{props.children}
			</NavLink>
		</li>

		);
};

export default navigationitems;
