import React, {Component} from 'react';
import Aux from '../Aux';
import NavigationItem from '../../components/Navigation/NavigationItem.js';

import { connect } from 'react-redux';


class Layout extends Component{

	render() {

		return (
			<Aux>
				<NavigationItem
				isAuth ={this.props.isAuthenticated}/>
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
