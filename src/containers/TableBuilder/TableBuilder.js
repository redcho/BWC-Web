import React, { Component } from "react";
import classes from "./TableBuilder.module.css";
import { NavLink, Route, Switch } from "react-router-dom";
import StatTable from "./StatTable/StatTable";
import { connect } from "react-redux";
import * as actions from "../../store/actions";


class TableBuilder extends Component {

        render() {

            return (
                <div className={classes.Menu}>
                    <ul>
                        <li>
                            <NavLink to={"/pvp/2v2"} exact
                                     activeClassName={classes.active}
                                     key={'2v2'}
                                     // onClick={this.props.pvp2v2()}
                                >2v2
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/pvp/3v3"}
                                     activeClassName={classes.active}
                                     key={'3v3'}>3v3
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/pvp/rbg"}
                                     activeClassName={classes.active}
                                     key={'rbg'}>RBG
                            </NavLink>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/pvp/2v2" component={StatTable} />
                        <Route path="/pvp/3v3" component={StatTable} />
                        <Route path="/pvp/rbg" component={StatTable} />
                    </Switch>
                </div>
            )
        }

    }

const mapDispatchToProps = dispatch => {
//         pvp2v2: () => dispatch(actions.data(type:{'2v2'}, {payload:'2v2'}))
//         pvp3v3: () => dispatch(actions.data({type: '3v3'}))
//         rbg: () => dispatch(actions.data({type: 'rbg'}))

}


export default connect(null,mapDispatchToProps)(TableBuilder);