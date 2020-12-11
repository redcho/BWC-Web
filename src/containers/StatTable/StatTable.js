import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions";



class StatTable extends Component {

        render() {
            let MiniStat = <Spinner />
            if(this.props.DummyData) {
                MiniStat = this.props.DummyData.map(arrayModal => (
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
                <table>
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
            )
        }

    }

const mapStateToProps = state => {
    return {
        DummyData: state.data.DummyData
    }
}


export default connect(mapStateToProps , null)(StatTable);