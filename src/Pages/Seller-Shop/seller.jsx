import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { user_product_start } from '../../Redux/Product/product-action';
import { pullEditData, pullUser } from '../../Redux/User/user-selector'
import { get_user_start } from '../../Redux/User/user-action'

import { SellerContainer, SubSeller, TopPart, Image, BottomPart } from './styles'
import Product from '../../Components/Product/product'
import ProgressBar from '../../Components/Progress-bar/bar'

export class SellerPage extends Component {

    componentDidMount() {
        const { user_product_start, get_user_start } = this.props
        const { sellerId } = this.props.match.params
        get_user_start(sellerId)
        user_product_start(sellerId)
    }

    render() {
        return (
            <SellerContainer>
                <SubSeller>
                    <TopPart></TopPart>
                    <Image src={require('../../Assets/Images/shop.png')} />
                    <BottomPart>
                        {
                            this.props.userData ?
                                <React.Fragment>
                                    <h1>{this.props.userData.user.username}</h1>
                                    <p>{this.props.userData.user.phone}</p>
                                </React.Fragment>
                                :
                                <ProgressBar></ProgressBar>
                        }
                    </BottomPart>
                </SubSeller>
                <Product sellerShopPage={true}></Product>
            </SellerContainer>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    userData: pullEditData
})

const mapDispatchToProps = (dispatch) => ({
    user_product_start: userId => dispatch(user_product_start({ userId })),
    get_user_start: userId => (dispatch(get_user_start(userId)))
})

export default connect(mapStateToProps, mapDispatchToProps)(SellerPage)
