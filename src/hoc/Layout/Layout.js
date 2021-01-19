import React, {Component} from 'react';
import ResizeObserver from 'rc-resize-observer';
import Aux from '../Aux';
import NavigationItem from '../../components/Navigation/NavigationItem.js';
import DrawerToggle from '../../components/Navigation/DrawerToggle/DrawerToggle';

import { connect } from 'react-redux';



class Layout extends Component{

state = {
		width: window.innerWidth,
		showNavItem: true
	}
NavItemClosedHandler = () => {
	this.setState({showNavItem: !this.state.showNavItem});
}
	render() {
		return (
			<Aux>
				{
					<ResizeObserver
						onResize={({width}) => {
						{this.setState({width: width})}
						}}>
						<div>
						{	this.state.width <= 500 ?
								<DrawerToggle open={this.state.showNavItem} clicked={this.NavItemClosedHandler}/> :
								<NavigationItem isAuth ={this.props.isAuthenticated}/>}
						</div>
					</ResizeObserver>
				}
			</Aux>
		);
	};
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null
	};
};

export default connect(mapStateToProps)(Layout);
