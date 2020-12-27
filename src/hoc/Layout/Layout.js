import React, {Component} from 'react';
import ResizeObserver from 'rc-resize-observer';
import Aux from '../Aux';
import NavigationItem from '../../components/Navigation/NavigationItem.js';
import DrawerToggle from '../../components/Navigation/DrawerToggle/DrawerToggle';

import { connect } from 'react-redux';



class Layout extends Component{
	state = {
		width: window.innerWidth
	}

	viewport = (width) => {

			 return width <= 500 ? <DrawerToggle /> : <NavigationItem isAuth ={this.props.isAuthenticated}/>
	}


	render() {


		return (
			<Aux>
				<ResizeObserver
					onResize={({width}) => {
						this.setState({width: width})
					}}
				>{this.viewport(this.state.width)} </ResizeObserver>

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
