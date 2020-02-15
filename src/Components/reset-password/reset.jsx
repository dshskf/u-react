import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { reset_password_start } from '../../Redux/User/user-action'
import { pullMsg, pullError, pullResetUser } from '../../Redux/User/user-selector'

import { FormInput, SignContainer, TextLogo, SubmitButton, InputButton } from '../Sign-in/styles';
import InputField from '../Input-Field/input';
import ErrorBox from '../Error-box/error'

export class Reset extends Component {
    state = {
        password: null,
        repassword: null
    };

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({
            [name]: value
        });
    };

    submitData = () => {
        const { user, reset_password_start } = this.props
        const dataToParse = {
            ...this.state,
            userId: user.userId
        }
        reset_password_start(dataToParse)
    }

    render() {
        return (
            <SignContainer>
                <FormInput>
                    <TextLogo to="/">U-Store</TextLogo>
                    {
                        this.props.error && typeof (this.props.error) === "string" ?
                            <ErrorBox errMsg={this.props.error}></ErrorBox>
                            :
                            null
                    }
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
                    {
                        this.props.response ?
                            // <ErrorBox errMsg={this.props.response}></ErrorBox>
                            console.log(this.props.response)
                            :
                            <SubmitButton>
                                <InputButton type='submit' value='Reset Password' onClick={this.submitData} />
                            </SubmitButton>
                    }
                </FormInput>
            </SignContainer>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    user: pullResetUser,
    error: pullError,
    response: pullMsg
})

const mapDispatchToProps = dispatch => ({
    reset_password_start: input => dispatch(reset_password_start(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(Reset)
