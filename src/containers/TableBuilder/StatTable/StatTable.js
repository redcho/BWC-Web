import React, { Component } from "react";
import classes from "./StatTable.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { connect } from "react-redux";
import Aux from '../../../hoc/Aux';
class StatTable extends Component {

    render() {


        let MiniStat = <Spinner />
        if (this.props.pvp_type) {
            switch (this.props.pvp_type) {
                case 'pvp_2v2':
                        MiniStat = this.props.pvp_2v2.map((arrayModal) => (
                             <tr>
                                <td>{arrayModal.id}</td>
                                <td>{arrayModal[0].rating}</td>
                                <td>{arrayModal[0].character.name.name}</td>
                                <td>{arrayModal[0].realm.slug}</td>
                                <td>{arrayModal[0].faction}</td>
                                <td>{arrayModal[0].race}</td>
                                <td>{arrayModal[0].class}</td>
                                <td>{arrayModal[0].spec}</td>
                                <td>{arrayModal[0].winlose}</td>
                            </tr>
                            )
                            )
            }
        }


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
                        <th>Race</th>
                        <th>Class</th>
                        <th>Spec</th>
                        <th>W-L</th>
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