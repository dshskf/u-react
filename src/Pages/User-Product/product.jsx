import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Product from '../../Components/Product/product'
import { user_product_start } from '../../Redux/Product/product-action'
import { pullUser } from '../../Redux/User/user-selector'

export class UserProduct extends Component {
    componentDidMount() {
        const { user_product_start, user } = this.props        
        user_product_start(user.id)
    }

    render() {
        return (
            <React.Fragment>
                <Product isEditPage={true}></Product>
            </React.Fragment>
        )
    }
}

const mapStateProps = createStructuredSelector({
    user: pullUser
})

const mapDispatchToProps = dispatch => ({
    user_product_start: userId => dispatch(user_product_start({ userId }))
})

export default connect(mapStateProps, mapDispatchToProps)(UserProduct)


