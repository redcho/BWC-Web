import React, { Component } from "react";
import classes from "./StatTable.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { connect } from "react-redux";
class StatTable extends Component {

    render() {


        let MiniStat = <Spinner />
        if (this.props.pvp_type) {
            switch (this.props.pvp_type) {
                case 'pvp_2v2':
                        MiniStat = this.props.pvp_2v2.sort((a, b) => a.id - b.id).map((arrayModal) => (
                             <tr>
                                <td>{arrayModal.id}</td>
                                <td>{arrayModal.rating}</td>
                                <td>{arrayModal.character.name}</td>
                                <td>{arrayModal.character.realm.slug}</td>
                                <td>{arrayModal.faction}</td>
                                <td>{arrayModal.tier.id}</td>
                                 <td>{arrayModal.season_match_statistics.played}</td>
                                <td>{arrayModal.season_match_statistics.lost}</td>
                                <td>{arrayModal.season_match_statistics.won}</td>

                            </tr>
                            )
                            )
            }
        }
console.log(this.props.pvp_2v2)

            // case 'pvp_3v3':
            //     MiniStat = this.props.pvp_3v3.map(arrayModal => (
            //         <tr>
            //             <td>{arrayModal.rank}</td>
            //             <td>{arrayModal.rating}</td>
            //             <td>{arrayModal.name}</td>
            //             <td>{arrayModal.realm}</td>
            //             <td>{arrayModal.faction}</td>
            //             <td>{arrayModal.race}</td>
            //             <td>{arrayModal.class}</td>
            //             <td>{arrayModal.spec}</td>
            //             <td>{arrayModal.winlose}</td>
            //         </tr>
            //     ));
            // case 'pvp_rbg':
            //     MiniStat = this.props.pvp_rbg.map(arrayModal => (
            //         <tr>
            //             <td>{arrayModal.rank}</td>
            //             <td>{arrayModal.rating}</td>
            //             <td>{arrayModal.name}</td>
            //             <td>{arrayModal.realm}</td>
            //             <td>{arrayModal.faction}</td>
            //             <td>{arrayModal.race}</td>
            //             <td>{arrayModal.class}</td>
            //             <td>{arrayModal.spec}</td>
            //             <td>{arrayModal.winlose}</td>
            //         </tr>
            //     ));


        // if(this.props.pvp_type) {
        //     MiniStat = this.props.pvp_2v2.map(arrayModal => (
        //         <tr>
        //             <td>{arrayModal.rank}</td>
        //             <td>{arrayModal.rating}</td>
        //             <td>{arrayModal.name}</td>
        //             <td>{arrayModal.realm}</td>
        //             <td>{arrayModal.faction}</td>
        //             <td>{arrayModal.race}</td>
        //             <td>{arrayModal.class}</td>
        //             <td>{arrayModal.spec}</td>
        //             <td>{arrayModal.winlose}</td>
        //         </tr>
        //     ));
        // }

        return (
            <div>
                <table className={classes.StatTable}>
                    <tr>
                        <th>Rank</th>
                        <th>Rating</th>
                        <th>Name</th>
                        <th>Realm</th>
                        <th>Faction</th>
                        <th>Tier</th>
                        <th>Played</th>
                        <th>Lost</th>
                        <th>Win</th>
                    </tr>
                    <tbody>
                    {MiniStat}
                    </tbody>
                </table>
            </div>
        )

    }
}
const mapStateToProps = state => {
    return {
        pvp_2v2: state.data.pvp_2v2,
        pvp_3v3: state.data.pvp_3v3,
        pvp_rbg: state.data.pvp_rbg
    }
}


export default connect(mapStateToProps, null)(StatTable);