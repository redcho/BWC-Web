import React, { Component } from "react";
import { connect } from 'react-redux';

import classes from "./StatBuilder.module.css";
import Spinner from "../../components/UI/Spinner/Spinner";
import Aux from "../../hoc/Aux";

class StatBuilder extends Component{
    state = {
        StatModal: {
            pvp: {
                header: 'PVP STATS',
                listElements: ['2v2','3v3','RBG']
            },
            mostUsed:{
                header:'PVE STATS',
                listElements: ['DUNGEONS','RAIDS']
            }
        }
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
      // console.log(pvpId);
      // console.log(DataChar);
      if (DataChar && pvpId) {
        let filteredPvp2v2 = DataChar.filter(pvp2Chars => {
          return pvpId.indexOf(pvp2Chars.id) !== -1;
        });
        // console.log(filteredPvp2v2);
        for(let i=0; i<pvpData.length; i++) {
          merged.push({
           ...pvpData[i],
           ...(filteredPvp2v2.find((itmInner) => itmInner.id === pvpData[i].character_id))}
          );
        }
         console.log(merged);
      }
    }


    render() {

      this.filteringData(this.props.pvp_2v2,this.props.data_character);
      // console.log(this.props.pvp_2v2);
      // console.log(this.props.data_character);

        let arrayStatModal = [];

        for(let key in this.state.StatModal) {
            arrayStatModal.push({
                id: key,
                config: this.state.StatModal[key]
            })
        }

        let MiniStat = <Spinner />;
        if(this.props.pvp_2v2) {
                MiniStat = this.props.pvp_2v2.map(arrayModal => (
                    <tr>
                        <td>{arrayModal.rank}</td>
                        <td>{arrayModal.rating}</td>
                        <td>{arrayModal.name}</td>
                    </tr>
                ))
        }
        let MiniStatMultiple = Array(5).fill(MiniStat);



        let StatModal = arrayStatModal.map(arrayModal => (
            <div>
                {/*{arrayModal.config.header === 'PVE STATS' ?*/}
                {/*<img src={pveHunter} alt="PVE"/>: <img src={arena} alt="ArenaPVP"/>}*/}
                <h1>{arrayModal.config.header}</h1>
                <div className={classes.flexContainer}>
                    {
                        arrayModal.config.listElements.map(elm =>{
                            return  (<div key={arrayModal.config.listElements[elm]}>
                                        <h2>{elm}</h2>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Rank</th>
                                                    <th>Rating</th>
                                                    <th>Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {MiniStatMultiple}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td colSpan="3"><a className={classes.moreLink} href="">SEE MORE >>></a></td>
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
        data_character: state.data.data_character
    }
};

export default connect(mapStateToProps, null)(StatBuilder);
