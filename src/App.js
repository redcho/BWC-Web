import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Redirect, Route, Switch } from "react-router-dom";
import Stats from "./components/Stats/Stats";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/logout";

import { connect } from 'react-redux';

class App extends Component {
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
                   <Route path="/home" component={Stats} />
                   <Route path="/login" component={Auth} />
                   <Route path="/pvp" component={Stats} />
                   <Route path="/pve" component={Stats} />
                   <Route path="/auctionhouse" component={Stats} />
                   <Route path="/logout" component={Logout} />
                   <Route path="/stats" component={Stats} />
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

export default connect(mapStateToProps)(App);
