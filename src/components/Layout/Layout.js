import React from 'react';
import Aux from '../../hoc/Aux.js';
import Toolbar from '../Navigation/Toolbar.js';
import Stats from '../Stats/Stats';


const Layout = () => {
	return (
		<Aux>
			<Toolbar />
			<Stats />
		</Aux>
		);
};

export default Layout;