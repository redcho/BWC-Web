import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/logout";
import StatBuilder from "./containers/StatBuilder/StatBuilder";
import StatTable from "./containers/TableBuilder/TableBuilder";

import { connect } from 'react-redux';
import * as actions from "./store/actions/index";



class App extends Component {
    componentDidMount() {
        this.props.onTryAutoSignUp();
        this.props.pvp_2v2();
        this.props.pvp_3v3();
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
                   // <Route path="/pvp/2v2" component={StatTable} />
                   //  <Route path="/pvp/3v3" component={StatTable} />
                   <Route path="/pve" component={StatBuilder} />
                   <Route path="/auctionhouse" component={StatBuilder} />
                   <Route path="/logout" component={Logout} />
                   <Route path="/stats" component={StatBuilder} />
                   <Redirect from="/" to="/login"/>
               </Switch>
           );
        }
        return (
            <div className="App">
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
        onTryAutoSignUp:() => dispatch(actions.authCheckState()),
        pvp_2v2: () => dispatch(actions.data_2v2()),
        pvp_3v3: () => dispatch(actions.data_3v3())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
