import React, { Component } from 'react';
import classes from './Auth.module.css';



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
        }
        const updatedFormElement = {
            ...this.state.AuthForm[inputIdentifier]
        }
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

        return (
                <form className={classes.Authcss}>

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
        );
    };
}

export default Auth;
