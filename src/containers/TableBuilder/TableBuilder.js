import React, { Component } from "react";
import classes from "./TableBuilder.module.css";
import { NavLink, Route, Switch } from "react-router-dom";
import StatTable from "./StatTable/StatTable";


class TableBuilder extends Component {



    render() {


            return (
                <div className={classes.Menu}>
                    <ul>
                        <li>
                            <NavLink to={"/pvp/2v2"} exact
                                     activeClassName={classes.active}
                                     key={'2v2'}
                                     onClick={this.props.pvp_2v2}
                                >2v2
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/pvp/3v3"}
                                     activeClassName={classes.active}
                                     key={'3v3'}
                                     onClick={this.props.pvp_3v3}
                            >3v3
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/pvp/rbg"}
                                     activeClassName={classes.active}
                                     key={'rbg'}
                                     onClick={this.props.pvp_rbg}
                            >RBG
                            </NavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/pvp/2v2" render={() =>(<StatTable pvp_type='PVP_2v2'/>)} />
                        <Route path="/pvp/3v3" render={() =>(<StatTable pvp_type='PVP_3v3'/>)} />
                        <Route path="/pvp/rbg" render={() =>(<StatTable pvp_type='PVP_RBG'/>)} />
                    </Switch>
                </div>
            )
        }

    }




export default TableBuilder;
