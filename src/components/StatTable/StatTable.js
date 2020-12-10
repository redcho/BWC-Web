import React from "react";
import { connect } from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";


const StatTable = (props) => {

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

                </tbody>
            </table>
        )
    }



export default connect(null, mapStateToProps)(StatTable);