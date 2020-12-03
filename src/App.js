import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/logout";
import StatBuilder from "./containers/StatBuilder/StatBuilder";
import StatTable from "./components/UI/StatTable/StatTable";

import { connect } from 'react-redux';
import * as actions from "./store/actions/index";


class App extends Component {
    componentDidMount() {
        this.props.onTryAutoSignUp();
    }

    render() {

        let routes = (
            <Switch>
                <Route path="/login" component={Auth} />
                <Route path="/logout" component={Logout} />
                <Redirect from="/" to="/login"/>
            </Switch>
        );

        if(this.props.isAuthenticated) {
           routes = (
               <Switch>
                   <Route path="/home" component={StatBuilder} />
                   <Route path="/login" component={Auth} />
                   <Route path="/pvp" component={StatTable} />
                   <Route path="/pve" component={StatBuilder} />
                   <Route path="/auctionhouse" component={StatBuilder} />
                   <Route path="/logout" component={Logout} />
                   <Route path="/stats" component={StatBuilder} />
                   <Redirect from="/" to="/login"/>
               </Switch>
           );
        }
        return (
            <div className="App demoWrap">
                <Layout/>
                {routes}
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignUp:() => dispatch(actions.authCheckState())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
