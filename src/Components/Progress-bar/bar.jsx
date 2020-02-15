import React, { Component } from 'react'
import { SpinnerContainer, SpinnerOverlay } from './styles'

export class ProgressBar extends Component {
    render() {
        return (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        )
    }
}

export default ProgressBar
