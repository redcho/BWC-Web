import React from 'react';
import classes from './StatsModal.module.css';

const StatsModal = (props) => {
	return (
		<div className={classes.Box}>
			{props.children}
		</div>
		);
};

export default StatsModal;
