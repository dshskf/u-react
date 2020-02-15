import React from 'react';
import InputField from '../Input-Field/input';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'

import { pullError, pullMsg } from '../../Redux/User/user-selector'
import { signup_start } from '../../Redux/User/user-action'

import { LoginLink, SubmitButton, FormInput, InputButton, SignContainer, TextLogo } from '../Sign-in/styles';
import { connect } from 'react-redux';
import ErrorBox from '../Error-box/error';

class RegisterForm extends React.Component {
    state = {
        username: null,
        email: null,
        phone: null,
        password: null,
        repassword: null
    };

    signUp_API = (e) => {
        e.preventDefault();
        const { signup_start } = this.props
        const dataToParse = {
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            repassword: this.state.repassword
        }
        signup_start(dataToParse)
    };

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <SignContainer>
                <FormInput>
                    <TextLogo to="/">U-Store</TextLogo>
                    {
                        this.props.error ?
                            <ErrorBox errMsg={this.props.error}></ErrorBox>
                            :
                            null
                    }
                    <InputField
                        labelText='Username'
                        type='text'
                        name='username'
                        passValue={this.state.username}
                        changeHandler={this.handleChange}
                    ></InputField>
                    <InputField
                        labelText='Email'
                        type='email'
                        name='email'
                        passValue={this.state.email}
                        changeHandler={this.handleChange}
                    ></InputField>
                    <InputField
                        labelText='Phone Number'
                        type='phone'
                        name='phone'
                        passValue={this.state.phone}
                        changeHandler={this.handleChange}
                    ></InputField>
                    <InputField
                        labelText='Password'
                        type='password'
                        name='password'
                        passValue={this.state.password}
                        changeHandler={this.handleChange}
                    ></InputField>
                    <InputField
                        labelText='Re-Type Password'
                        type='password'
                        name='repassword'
                        passValue={this.state.repassword}
                        changeHandler={this.handleChange}
                    ></InputField>
                    <Link id='goLogin' to='/signin'></Link>
                    <LoginLink>
                        <Link to='/signin'>already have an account?</Link>
                    </LoginLink>
                    {
                        this.props.response ?
                            <ErrorBox errMsg={this.props.response.message} isSuccess={true}></ErrorBox>
                            :
                            <SubmitButton>
                                <InputButton type='submit' value='Sign-Up' onClick={this.signUp_API} />
                            </SubmitButton>
                    }


                </FormInput>
            </SignContainer>
        );
    }
}

const stateProps = createStructuredSelector({
    error: pullError,
    response: pullMsg
})

const dispatchProps = dispatch => ({
    signup_start: userData => dispatch(signup_start(userData))
})

export default connect(stateProps, dispatchProps)(RegisterForm);
