import React from 'react';
import StatsModal from './StatsModal/StatsModal';
import Aux from '../../hoc/Aux';

const Stats = () => {
	return (
		<Aux>
			<StatsModal>1</StatsModal>
			<StatsModal>2</StatsModal>
			<StatsModal>3</StatsModal>
			<StatsModal>4</StatsModal>
		</Aux>
		);
};

export default Stats;