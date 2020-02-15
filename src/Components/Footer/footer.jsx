import React, { Component } from 'react'
import { FooterContainer, LinkButton } from './styles'

export class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <LinkButton to="/">About Us</LinkButton>
                <LinkButton to="/">Contact Us</LinkButton>
            </FooterContainer>
        )
    }
}

export default Footer
