import React from "react";

import classes from './DrawerToggle.module.css';
import NavigationItem from '../NavigationItem';

import { connect } from 'react-redux';


const drawerToggle = (props) => {
  let attachedClasses = classes.Hidden;

if(!props.open) {
  attachedClasses = classes.Open
}

  return(
      <div>
        <div className={classes.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className={attachedClasses}>
            <NavigationItem isAuth ={props.isAuthenticated}/>
        </div>
      </div>
  )
};

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null
	};
};

export default connect(mapStateToProps)(drawerToggle);
