import React, { Component } from "react";
import classes from "./StatTable.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { connect } from "react-redux";



class StatTable extends Component {

    filteringData = (data,dataChar) => {
        let pvpData = data;
        let DataChar = dataChar;
        let pvpId = [];
        let merged = [];
        for(let key in pvpData) {
          pvpId.push(
            pvpData[key].character_id
          )
        }
        if (DataChar && pvpId && pvpData) {
          let filteredPvp2v2 = DataChar.filter(pvp2Chars => {
            return pvpId.indexOf(pvp2Chars.id) !== -1;
          });
          for(let i=0; i<pvpData.length; i++) {
            merged.push({
             ...pvpData[i],
             ...(filteredPvp2v2.find((itmInner) => itmInner.id === pvpData[i].character_id))}
            );
          }
        }
           return merged
      }

    render() {
        console.log(this.filteringData(this.props.pvp_rbg, this.props.data_character));
        let MiniStat = <Spinner />
            switch (this.props.pvp_type) {
                            case 'PVP_2v2':
                                    MiniStat = this.filteringData(this.props.pvp_2v2, this.props.data_character).map(arrayModal => (
                                        <tr>
                                            <td>{arrayModal.rank}</td>
                                            <td>{arrayModal.rating}</td>
                                            <td>{arrayModal.name}</td>
                                            <td>{arrayModal.realm.slug}</td>
                                            <td>{arrayModal.faction}</td>
                                            <td>{arrayModal.season_match_statistics.played}</td>
                                            <td>{arrayModal.season_match_statistics.lost}</td>
                                            <td>{arrayModal.season_match_statistics.won}</td>
                                        </tr>
                                        )
                                        )
                            break;
                            case 'PVP_3v3':
                                MiniStat = this.filteringData(this.props.pvp_3v3, this.props.data_character).map(arrayModal => (
                                    <tr>
                                        <td>{arrayModal.rank}</td>
                                        <td>{arrayModal.rating}</td>
                                        <td>{arrayModal.name}</td>
                                        <td>{arrayModal.realm.slug}</td>
                                        <td>{arrayModal.faction}</td>
                                        <td>{arrayModal.season_match_statistics.played}</td>
                                        <td>{arrayModal.season_match_statistics.lost}</td>
                                        <td>{arrayModal.season_match_statistics.won}</td>
                                    </tr>
                                ));
                            break;    
                            case 'PVP_RBG':
                                    MiniStat = this.filteringData(this.props.pvp_rbg, this.props.data_character).map(arrayModal => (
                                    <tr>
                                        <td>{arrayModal.rank}</td>
                                        <td>{arrayModal.rating}</td>
                                        <td>{arrayModal.name}</td>
                                        <td>{arrayModal.realm.slug}</td>
                                        <td>{arrayModal.faction}</td>
                                        <td>{arrayModal.season_match_statistics.played}</td>
                                        <td>{arrayModal.season_match_statistics.lost}</td>
                                        <td>{arrayModal.season_match_statistics.won}</td>
                                    </tr>
                                    ));
                                break;
                            default:
                                break;
        }

        return (
            <div>
                <table className={classes.StatTable}>
                    <tr>
                        <th>Rank</th>
                        <th>Rating</th>
                        <th>Name</th>
                        <th>Realm</th>
                        <th>Faction</th>
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
        data_character: state.data.data_character,
        pvp_2v2: state.data.pvp_2v2,
        pvp_3v3: state.data.pvp_3v3,
        pvp_rbg: state.data.pvp_rbg
    }
}


export default connect(mapStateToProps, null)(StatTable);
