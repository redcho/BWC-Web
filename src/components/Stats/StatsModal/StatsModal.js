import React from 'react';
import classes from './StatsModal.module.css';

const StatsModal = (props) => {
	return (
		<div className={classes.Box}>
			{/*<table>*/}
			{/*	<th>LeaderBoard</th>*/}
			{/*	<tr>*/}
			{/*		<td>2v2</td>*/}
			{/*		<td>3v3</td>*/}
			{/*		<td>RBG</td>*/}
			{/*	</tr>*/}

			{/*</table>*/}
			{props.children}
		</div>
		);
};

export default StatsModal;
