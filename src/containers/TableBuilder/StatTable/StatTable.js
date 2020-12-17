import React, { Component } from "react";
import classes from "./StatTable.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { connect } from "react-redux";

class StatTable extends Component {
    render() {
        let MiniStat = <Spinner />
        if(this.props.pvp_2v2) {
            MiniStat = this.props.pvp_2v2.map(arrayModal => (
                <tr>
                    <td>{arrayModal.rank}</td>
                    <td>{arrayModal.rating}</td>
                    <td>{arrayModal.name}</td>
                    <td>{arrayModal.realm}</td>
                    <td>{arrayModal.faction}</td>
                    <td>{arrayModal.race}</td>
                    <td>{arrayModal.class}</td>
                    <td>{arrayModal.spec}</td>
                    <td>{arrayModal.winlose}</td>
                </tr>
            ));
        }
        let MiniStatMultiple = Array(100).fill(MiniStat);
        return (
            <div>
                <table className={classes.StatTable}>
                    <tr>
                        <th>Rank</th>
                        <th>Rating</th>
                        <th>Name</th>
                        <th>Realm</th>
                        <th>Faction</th>
                        <th>Race</th>
                        <th>Class</th>
                        <th>Spec</th>
                        <th>W-L</th>
                    </tr>
                    <tbody>
                    {MiniStatMultiple}
                    </tbody>
                </table>
            </div>
        )

    }
}
const mapStateToProps = state => {
    return {
        pvp_2v2: state.data.pvp_2v2
    }
}

export default connect(mapStateToProps, null)(StatTable);