import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
import classes from './NavigationItem.module.css';

const NavItem = ['LOGO ','PVP ','PVE ','AUCTION HOUSE ','STATS '];

const NavigationItem = () => {
	return (
		<ul className={classes.Navcss}>
			{NavItem.map(nvt => (
				 	<NavigationItems link={nvt} key={nvt}>{nvt}</NavigationItems>
					)
				)}
		</ul>
		);
};

export default NavigationItem;

