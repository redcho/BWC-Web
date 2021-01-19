import React, { Component } from "react";
import { connect } from 'react-redux';

import classes from "./StatBuilder.module.css";
import Spinner from "../../components/UI/Spinner/Spinner";
import Aux from "../../hoc/Aux";
import * as actions from "../../store/actions/index";

class StatBuilder extends Component{
    state = {
                listElements: ['2v2','3v3','RBG']
    }


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
      return merged.slice(0,5)
    }


    render() {
        // this.filteringData(this.props.pvp_2v2, this.props.data_character);


        let MiniStat = <Spinner />;
        if(this.filteringData(this.props.pvp_2v2, this.props.data_character)) {
                MiniStat = this.filteringData(this.props.pvp_2v2, this.props.data_character).map(arrayModal => (
                    <tr>
                        <td>{arrayModal.rank}</td>
                        <td>{arrayModal.rating}</td>
                        <td>{arrayModal.name}</td>
                        <td>{arrayModal.realm.slug}</td>
                    </tr>
                ))
        }

        let StatModal = this.state.listElements.map(arrayModal => (
            <div>
                <h1>PVP STATS</h1>
                <div className={classes.flexContainer}>
                    {
                        this.state.listElements.map(elm =>{
                            return  (<div key={arrayModal[elm]}>
                                        <h2>{elm}</h2>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Rank</th>
                                                    <th>Rating</th>
                                                    <th>Name</th>
                                                    <th>Realm</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {MiniStat}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td colSpan="4"><a className={classes.moreLink} href="">SEE MORE >>></a></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>)
                        })
                    }
                </div>
            </div>

        ))



        return (
                <Aux>
                    <div>
                    {/*<div className={classes.demoWrap}>*/}
                        <h1>WOW-CRAWLER</h1>
                        <p><span className={classes.bold}>Info: Lorem ipsum dolor</span> sit amet, consectetur adipiscing elit. In pharetra lobortis nisl sed viverra. Curabitur accumsan lacinia nisl, ut vulputate diam dictum in. Ut at feugiat erat, sit amet mattis nunc. Curabitur non sapien odio. Integer laoreet fringilla risus. Mauris pulvinar nibh dolor, quis dignissim eros venenatis vitae. Maecenas dapibus, diam et facilisis imperdiet, purus magna gravida dolor, at volutpat velit elit ut arcu.

                            Morbi volutpat, justo et blandit faucibus, purus orci laoreet neque, et viverra orci purus nec quam. Fusce a rutrum est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lobortis purus. Integer vitae orci eu.</p>
                    </div>
                    {/*className={classes.mainDiv}*/}
                    <div>
                        {StatModal}
                    </div>
                </Aux>


        )

    }
}

const mapStateToProps = state => {
    return {
        pvp_2v2: state.data.pvp_2v2,
        data_character: state.data.data_character,
        mergedDataList: state.data.mergedDataList
    }
};


export default connect(mapStateToProps, null)(StatBuilder);
