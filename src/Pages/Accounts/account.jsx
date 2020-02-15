import React from 'react'

import RegisterForm from '../../Components/Sign-up/sign-up'
import LoginForm from '../../Components/Sign-in/sign-in'
import HomePage from '../Home/home'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { pullUser } from '../../Redux/User/user-selector'
import { clear_error } from '../../Redux/User/user-action'
import { AccountContainer, SubForm } from './styles'
import { Route } from 'react-router-dom'


class AccountPage extends React.Component {

    componentDidMount() {
        const { clear_error } = this.props
        clear_error()
    }

    render() {
        return (
            this.props.user ?
                <React.Fragment>
                    {
                        this.props.history.push('/')
                    }
                    <Route exact path="/" component={HomePage}></Route>
                </React.Fragment>
                :
                <AccountContainer>
                    <SubForm>
                        {
                            this.props.isLogin ? <LoginForm></LoginForm> : <RegisterForm></RegisterForm>
                        }
                    </SubForm>

                </AccountContainer>

        )
    }
}

const stateProps = createStructuredSelector({
    user: pullUser
})

const dispatchProps = dispatch => ({
    clear_error: () => dispatch(clear_error())
})

export default connect(stateProps, dispatchProps)(AccountPage)