import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
import classes from './NavigationItem.module.css';



const NavigationItem = (props) => {


	return (

		<div>
			<nav>
				<ul className={classes.Navcss}>
					<NavigationItems link={'/home'} key={'home'}>HOME</NavigationItems>
					<NavigationItems link={'/pvp'} key={'pvp'}>PVP</NavigationItems>
					<NavigationItems link={'/pve'} key={'pve'}>PVE</NavigationItems>
					<NavigationItems link={'/auctionhouse'} key={'auctionhouse'}>AUCTION HOUSE</NavigationItems>
					{props.isAuth ? <NavigationItems link={'/stats'} key={'stats'}>STATS</NavigationItems> : null}
					{!props.isAuth ? <NavigationItems  exact link={'/login'} key={'login'}>LOG IN</NavigationItems> :
						<NavigationItems exact link={'/logout'} key={'logout'}>LOGOUT</NavigationItems>}
				</ul>
			</nav>
		</div>

		);

};

export default NavigationItem;

