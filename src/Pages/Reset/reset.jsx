import React, { Component } from 'react'
import Header from '../../Components/Header/header'
import Reset from '../../Components/reset-password/reset'

import { createStructuredSelector } from 'reselect'
import { authenticated_reset_start } from '../../Redux/User/user-action'
import { pullResetUser } from '../../Redux/User/user-selector'
import { connect } from 'react-redux'

export class ResetPage extends Component {

    componentDidMount(){        
        const{auth_start}=this.props
        auth_start(this.props.match.params.token)
    }

    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <Reset></Reset>
            </React.Fragment>
        )
    }
}

const stateProps = createStructuredSelector({
    authData: pullResetUser
})

const dispatchProps = dispatch => ({
    auth_start: token => dispatch(authenticated_reset_start(token))
})

export default connect(stateProps, dispatchProps)(ResetPage)
