import React from 'react';
import classes from './NavigationItems.module.css'

const navigationitems = (props) => {
	return (

		<li> 
			<a
			 href={props.link}>
			{props.children}
			</a>
		</li>
		
		);
};

export default navigationitems;