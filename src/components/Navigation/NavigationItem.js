import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
import classes from './NavigationItem.module.css';
import  { Route, Switch, Redirect } from 'react-router-dom';
import Stats from '../Stats/Stats.js';
import Auth from '../../containers/Auth/Auth.js';

const NavItem = ['HOME ','PVP ','PVE','AUCTION HOUSE ','STATS ','LOG IN'];




const NavigationItem = () => {
// Tiklandiginda renk degisiyor ama degismis halde kalmiyor duzeltilecek
		let Navelements = NavItem.map(nvt => {
			if(nvt === 'LOG IN' ) {
				return (
					<NavigationItems
						exact={true}
						link={nvt.toLowerCase()
							.replace(/\s/g,"")}
						key={nvt}>
						{nvt}
					</NavigationItems>
				)
			}
			return (
				<NavigationItems
					link={nvt.toLowerCase()
						.replace(/\s/g,"")}
					key={nvt}>
					{nvt}
				</NavigationItems>
				)
			}
		);
		console.log(Navelements);

	return (
		<div>
			<nav>
				<ul className={classes.Navcss}>
					{Navelements}
				</ul>
			</nav>
			<Switch>
				<Route path="/home" component={Stats} />
				<Route path="/stats" component={Stats} />
				<Route path="/pvp" component={Stats} />
				<Route path="/pve" component={Stats} />
				<Route path="/login" component={Auth} />
				<Redirect from="/" to="/stats"/>
			</Switch>

		</div>

		);

};

export default NavigationItem;

