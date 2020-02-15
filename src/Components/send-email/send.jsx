import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { send_email_start } from '../../Redux/User/user-action'
import { pullError } from '../../Redux/User/user-selector'

import ErrorBox from '../Error-box/error'
import { MaskContainer, SendBox, InputField, Logo, UserButton } from './styles'

export class SendEmail extends Component {

    state = {
        email: null
    }

    postEmail = () => {
        const { send_email_start } = this.props
        send_email_start(this.state.email)
    }

    inputHandler = e => {
        this.setState({
            email: e.target.value
        })
    }

    render() {
        return (
            this.props.sendMail ?
                <MaskContainer>
                    <SendBox>
                        <Logo to="/">U-Store</Logo>
                        <InputField type="email" placeholder="Email" onChange={this.inputHandler} ></InputField>
                        {
                            this.props.errData && typeof (this.props.errData) === "string" ?
                                <ErrorBox errMsg={this.props.errData}></ErrorBox>
                                :
                                null
                        }
                        <UserButton type="submit" value="Send" onClick={this.postEmail} />
                        <UserButton type="submit" value="Cancel" onClick={this.props.showHandler} cancel />
                    </SendBox>
                </MaskContainer>
                :
                null
        )
    }
}

const mapStateToProps = createStructuredSelector({
    errData: pullError
})

const mapDispatchToProps = dispatch => ({
    send_email_start: email => dispatch(send_email_start(email))
})

export default connect(mapStateToProps, mapDispatchToProps)(SendEmail)
