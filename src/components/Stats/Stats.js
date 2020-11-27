import React from 'react';
import StatsModal from './StatsModal/StatsModal';
import StatBuilder from "../../containers/StatBuilder/StatBuilder";
import classes from './Stats.module.css';

const Stats = () => {
	return (

		<div>
			<StatsModal>PVP LeaderBoards , 2v2 , 3v3, RBG</StatsModal>
			<StatsModal>Raid, Top 5 raid names</StatsModal>
			<StatsModal>Auction House most selling items in professions</StatsModal>
			<StatsModal>Server Stats best server pve guild best pvp char</StatsModal>
			<StatBuilder />
		</div>
		);
};

export default Stats;


