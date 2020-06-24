import React from 'react';

const navigationitems = (props) => {
	return (

		<li><a href={props.link}>{props.children}</a></li>
		
		);
};

export default navigationitems;