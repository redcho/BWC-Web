import React, { Component } from "react";
import classes from "./StatBuilder.module.css";


class StatBuilder extends Component{
    state = {
        StatModal: {
            pvp: {
                header: 'PVP STATS',
                listElements: ['2v2','3v3','RBG']
            },
            mostUsed:{
                header:'BEST CHARACTERS',
                listElements: ['PVP','PVE']
            }
        }
    }

    render() {
        let arrayStatModal = [];

        for(let key in this.state.StatModal) {
            arrayStatModal.push({
                id: key,
                config: this.state.StatModal[key]
            })
        }

        let StatModal = arrayStatModal.map(arrayModal => (
            <div className={classes.mainDiv}>
                <h1 className={classes.headerCss}>{arrayModal.config.header}</h1>
                <div className={classes.flexContainer}>
                    {
                        arrayModal.config.listElements.map(elm =>{
                            return  <div key={arrayModal.config.listElements[elm]}>{elm}</div>
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