import React, { Component } from "react";
import classes from "./StatBuilder.module.css";
import axios from "../../axios-dummy";
import Spinner from "../../components/UI/Spinner/Spinner";

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
        },
        DummyData: null
    }

    componentDidMount() {
        axios.get('/pvp.json')
            .then(response => {
                const DummyData = [];
                for (let key in response.data) {
                    DummyData.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({DummyData: DummyData})
            });
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
        if(this.state.DummyData) {
                MiniStat = this.state.DummyData.map(arrayModal => (
                    <tr>
                        <th>{arrayModal.rank}</th>
                        <th>{arrayModal.rating}</th>
                        <th>{arrayModal.name}</th>
                    </tr>
                ))
        }

        let MiniStatMultiple = Array(5).fill(MiniStat);



        let StatModal = arrayStatModal.map(arrayModal => (
            <div className={classes.mainDiv}>
                <h1 className={classes.headerCss}>{arrayModal.config.header}</h1>
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
                                        </table>
                                    </div>)
                        })
                    }
                </div>
            </div>

        ))



        return (

        <div>{StatModal}</div>

        )

    }
}

export default StatBuilder;