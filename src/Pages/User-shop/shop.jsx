import React, { Component } from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

//import { } from '../../Redux/Order/order-selector'
import { pullSellerInvoice } from '../../Redux/Product/product-selector'
import { pullUser } from '../../Redux/User/user-selector'

import { fetch_detail_start } from '../../Redux/Order/order-action'
import { seller_invoice_start } from '../../Redux/Product/product-action'

import OrderContainer from '../../Components/Order/container/container'
import OrderDetail from '../../Components/Order/details/detail'
import ProgressBar from '../../Components/Progress-bar/bar'

export class UserShopPage extends Component {

    state = {
        show: false,
        detailData: null
    }

    componentDidMount() {
        const { user, seller_invoice_start } = this.props
        seller_invoice_start(user.id)
    }

    detailHandler = e => {
        const { fetch_detail_start, invoice } = this.props
        invoice.data.map(data => {
            if (data._id === e.target.id) {
                this.setState({
                    detailData: {
                        data: data,
                        shipment: data.shipment_fee,
                        total: data.total
                    },
                    show: true
                })
            }
        })
        fetch_detail_start(e.target.name)
    }

    hideDetail = () => {
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.invoice ?
                        <React.Fragment>
                            <OrderContainer clickInv={this.detailHandler} sellerPage={true} />
                            {
                                this.state.show ?
                                    //console.log(this.props.invoice)
                                    <OrderDetail show={this.hideDetail} sellerPage={true} {...this.state.detailData} />
                                    :
                                    null
                            }
                        </React.Fragment>
                        :
                        <ProgressBar></ProgressBar>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    user: pullUser,
    invoice: pullSellerInvoice
})

const mapDispatchToProps = dispatch => ({
    seller_invoice_start: sellerId => dispatch(seller_invoice_start(sellerId)),
    fetch_detail_start: userId => dispatch(fetch_detail_start(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShopPage)
