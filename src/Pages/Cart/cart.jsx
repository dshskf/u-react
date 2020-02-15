import React from 'react'
import { createStructuredSelector } from 'reselect'

import CartContainer from '../../Components/Cart/Cart-Container/container'
import CartDetail from '../../Components/Cart/Cart-Detail/detail'

import { pullUser } from '../../Redux/User/user-selector'
import { pullData } from '../../Redux/Cart/cart-selector'
import { fetch_cart_start } from '../../Redux/Cart/cart-action'
import { connect } from 'react-redux'

import { OuterContainer } from './styles'
import ProgressBar from '../../Components/Progress-bar/bar'

class CartPage extends React.Component {

    componentDidMount() {
        const { user, fetch_cart_start } = this.props
        if (user) {
            fetch_cart_start(user.id)
        }
    }

    render() {
        return (
            this.props.cart ?
                <OuterContainer>                    
                    <CartContainer></CartContainer>
                    <CartDetail></CartDetail>
                </OuterContainer>
                :
                <ProgressBar></ProgressBar>
        )
    }
}

const stateProps = createStructuredSelector({
    user: pullUser,
    cart: pullData
})

const dispatchProps = dispatch => ({
    fetch_cart_start: userId => dispatch(fetch_cart_start({ userId }))
})

export default connect(stateProps, dispatchProps)(CartPage)