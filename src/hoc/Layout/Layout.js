import React, {Component} from 'react';
import Aux from '../Aux';
import NavigationItem from '../../components/Navigation/NavigationItem.js';
import DrawerToggle from '../../components/Navigation/DrawerToggle/DrawerToggle';

import { connect } from 'react-redux';



class Layout extends Component{
	

	viewport = () => {
		var win = window,
			doc = document,
			docElem = doc.documentElement,
			body = doc.getElementsByTagName('body')[0],
			x = win.innerWidth || docElem.clientWidth || body.clientWidth;
			return x <= 500 ? <DrawerToggle /> : <NavigationItem isAuth ={this.props.isAuthenticated}/>

	}


	render() {


		return (
			<Aux>
					{this.viewport()}
				{/*{window.addEventListener('resize', this.viewport())}*/}

				{/*<NavigationItem*/}
				{/*isAuth ={this.props.isAuthenticated}/>*/}
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
