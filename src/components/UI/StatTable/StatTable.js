import React from "react";



const StatTable = (props) => {
    return (
        <table>
            <tr>
                <th>Rank</th>
                <th>Rating</th>
                <th>Name</th>
                <th>Realm</th>
                <th>Fanction</th>
                <th>Race</th>
                <th>Class</th>
                <th>Spec</th>
                <th>W-L</th>
            </tr>
            <tbody>
                {props.children}
            </tbody>


        </table>
    )
}

export default StatTable;