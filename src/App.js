import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Redirect, Route, Switch } from "react-router-dom";
import Stats from "./components/Stats/Stats";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/logout";


function App() {
  return (
    <div className="App">
        <Layout/>
        <Switch>
            <Route path="/home" component={Stats} />
            <Route path="/stats" component={Stats} />
            <Route path="/pvp" component={Stats} />
            <Route path="/pve" component={Stats} />
            <Route path="/auctionhouse" component={Stats} />
            <Route path="/login" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Redirect from="/" to="/login"/>
        </Switch>
    </div>

  );
}



export default App;
