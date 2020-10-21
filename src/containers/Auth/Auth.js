import React, { Component } from 'react';
import classes from './Auth.module.css';

class Auth extends Component {

    render() {
        return (
                <form className={classes.Authcss}>

                    <input type="email" placeholder="E-MAIL"/>
                    <input type="password"  placeholder="PASSWORD"/>
                    <br/>
                    <input type="submit" value="LOG IN"/>
                </form>
        );
    };
}

export default Auth;
