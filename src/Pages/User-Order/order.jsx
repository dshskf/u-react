import React, { Component } from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { fetch_detail_start } from '../../Redux/Order/order-action'
import { pullDetail } from '../../Redux/Order/order-selector'
import { pullUser } from '../../Redux/User/user-selector'

import OrderContainer from '../../Components/Order/container/container'
import OrderDetail from '../../Components/Order/details/detail'
import ProgressBar from '../../Components/Progress-bar/bar'

export class UserOrderPage extends Component {

    state = {
        show: false,
        detailData: null
    }

    componentDidMount() {
        const { user, fetch_detail_start } = this.props
        fetch_detail_start(user.id)
    }

    detailHandler = e => {
        this.props.order.data.map(data => {            
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
                    this.props.order ?
                        <React.Fragment>
                            <OrderContainer clickInv={this.detailHandler} />
                            {
                                this.state.show ?
                                    <OrderDetail show={this.hideDetail} {...this.state.detailData} />
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
    order: pullDetail,
    user: pullUser
})

const mapDispatchToProps = dispatch => ({
    fetch_detail_start: userId => dispatch(fetch_detail_start(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserOrderPage)
