import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
import classes from './NavigationItem.module.css';



const NavigationItem = (props) => {

	let navItems = (
		<ul className={classes.Navcss}>
			<NavigationItems link={'/home'} key={'home'}>HOME</NavigationItems>
			<NavigationItems link={'/pvp/2v2'} key={'pvp'}>PVP</NavigationItems>
			<NavigationItems link={'/pve'} key={'pve'}>PVE</NavigationItems>
			<NavigationItems link={'/auctionhouse'} key={'auctionhouse'}>AUCTION HOUSE</NavigationItems>
			<NavigationItems link={'/stats'} key={'stats'}>STATS</NavigationItems>
			{!props.isAuth ? <NavigationItems  exact link={'/login'} key={'login'}>LOG IN</NavigationItems> :
				<NavigationItems exact link={'/logout'} key={'logout'}>LOGOUT</NavigationItems>}
		</ul>
	);

	if(!props.isAuth) {
		navItems = (
			<ul className={classes.Navcss}>
				{!props.isAuth ? <NavigationItems  exact link={'/login'} key={'login'}>LOG IN</NavigationItems> :
					<NavigationItems exact link={'/logout'} key={'logout'}>LOGOUT</NavigationItems>}
			</ul>
		);
	}





	return (

		<div>
			<nav>
					{navItems}
			</nav>
		</div>

		);

};

export default NavigationItem;
