import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';

const NavItem = ['LOGO ','PVP ','PVE ','AUCTION HOUSE ','STATS '];

const NavigationItem = () => {
	return (
		<ul>
			{NavItem.map(nvt => (
				 	<NavigationItems link={nvt} key={nvt}>{nvt}</NavigationItems>
					)
				)}
		</ul>
		);
};

export default NavigationItem;

