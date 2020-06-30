import React from 'react';
import StatsModal from './StatsModal/StatsModal';
import Aux from '../../hoc/Aux';
import classes from './Stats.module.css';

const Stats = () => {
	return (
		<Aux>

			<div className={classes.Flex}>

				<StatsModal>1</StatsModal>
				<StatsModal>2</StatsModal>	

			</div>

			<div className={classes.Flex}>

				<StatsModal>3</StatsModal>
				<StatsModal>4</StatsModal>	

			</div>

		</Aux>
		);
};

export default Stats;

