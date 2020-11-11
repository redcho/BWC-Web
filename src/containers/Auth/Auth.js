import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Auth.module.css';
import * as actions from '../../store/actions/index';
import {Redirect} from "react-router-dom";


class Auth extends Component {
    state = {
        AuthForm: {
            email: {
                elementType: 'email',
                placeholder: 'E-MAIL',
                validation: {
                    required:true
                },
                valid: false,
                value:'',
                touched: false
            },
            password: {
                elementType: 'password',
                placeholder: 'PASSWORD',
                validation: {
                    required:true
                },
                valid: false,
                value: '',
                touched: false
            }
        },
        totalValid: false
    };

    checkValidity = (value,rules) => {
        let isValid = false;

        if(rules.required) {
            isValid = value.trim() !== '';
        }

        return isValid;
    };

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...this.state.AuthForm
        };
        const updatedFormElement = {
            ...this.state.AuthForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedForm[inputIdentifier] = updatedFormElement;

        let TotalValid = false;
        for(let inputIdentifier in updatedForm) {
            TotalValid = updatedForm[inputIdentifier].valid;
        }
        this.setState({AuthForm: updatedForm, totalValid: TotalValid});
        //console.log(updatedFormElement);
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.AuthForm.email.value, this.state.AuthForm.password.value);
    };

    render() {
        const authFormArray = [];
        const inputClasses = [classes.InputElement];
        const invalidInputClasses = [classes.InputElement, classes.Invalid ];

        for(let key in this.state.AuthForm) {
            authFormArray.push({
                id: key,
                config: this.state.AuthForm[key]
            })
        }

        let authRedirect = null;
        if(this.props.isAuthenticated) {
           authRedirect = <Redirect to="/home"/>
        }

        return (
                <div>
                    {authRedirect}
                    <form className={classes.Authcss} onSubmit={this.submitHandler}>
                        {authFormArray.map(authForm => (
                                <input
                                    // className={inputClasses.join(' ')}
                                    className={authForm.config.valid ? inputClasses.join(' ') : invalidInputClasses.join(' ') &&
                                    authForm.config.touched ? invalidInputClasses.join(' ') : inputClasses.join(' ') }
                                    key={authForm.config.elementType}
                                    type={authForm.config.elementType}
                                    placeholder={authForm.config.placeholder}
                                    onChange={(event) =>{
                                        this.inputChangedHandler(event, authForm.id);
                                    }
                                    }
                                />
                            )
                        )}
                        <br/>
                        <input type="submit" value="LOG IN" disabled={!this.state.totalValid}/>
                    </form>
                </div>

        );
    };
}

const mapDispatchToProps = dispatch => {
  return {
      onAuth: (email, password) => dispatch(actions.auth(email, password))
  };
};

const mapStateToProps = state => {
    return {
       isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
