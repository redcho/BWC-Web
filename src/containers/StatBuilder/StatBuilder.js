import React, { Component } from "react";
import { connect } from 'react-redux';

import classes from "./StatBuilder.module.css";
import Spinner from "../../components/UI/Spinner/Spinner";
import Aux from "../../hoc/Aux";
import * as actions from '../../store/actions/index';

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

    componentDidMount() {
        this.props.onFetchData();
    }

    // dataPost = () => {
    //     const dummyData = {
    //         rank: 1,
    //         rating: 3200,
    //         name: 'Lorem',
    //         realm: 'Ipsum',
    //         faction: 'Horde',
    //         race: 'Human',
    //         class: 'warlock',
    //         spec: 'Destruction',
    //         winlose: '1300-400'
    //     }
    //
    //     axios.post('/pvp.json', dummyData)
    //         .then(response => console.log(response))
    //         .catch(error => console.log(error));
    //
    // }

    render() {
        let arrayStatModal = [];

        for(let key in this.state.StatModal) {
            arrayStatModal.push({
                id: key,
                config: this.state.StatModal[key]
            })
        }

        let MiniStat = <Spinner />;
        if(this.props.DummyData) {
                MiniStat = this.props.DummyData.map(arrayModal => (
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
                    <div className={classes.demoWrap}>
                        <h1>WOW-CRAWLER</h1>
                        <p>Info: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra lobortis nisl sed viverra. Curabitur accumsan lacinia nisl, ut vulputate diam dictum in. Ut at feugiat erat, sit amet mattis nunc. Curabitur non sapien odio. Integer laoreet fringilla risus. Mauris pulvinar nibh dolor, quis dignissim eros venenatis vitae. Maecenas dapibus, diam et facilisis imperdiet, purus magna gravida dolor, at volutpat velit elit ut arcu.

                            Morbi volutpat, justo et blandit faucibus, purus orci laoreet neque, et viverra orci purus nec quam. Fusce a rutrum est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lobortis purus. Integer vitae orci eu.</p>
                    </div>
                    <div className={classes.mainDiv}>{StatModal}</div>
                </Aux>


        )

    }
}

const mapStateToProps = state => {
    return {
        DummyData: state.data.DummyData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchData: () => dispatch(actions.data())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatBuilder);