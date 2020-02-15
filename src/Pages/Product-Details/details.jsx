import React from 'react'

import ProductData from '../../Components/Details/product-data/data'
import ProductSeller from '../../Components/Details/product-seller/seller'
import ProductDesc from '../../Components/Details/product-desc/desc'
import Header from '../../Components/Header/header'

import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import { detail_start } from '../../Redux/Product/product-action'
import { pullDetails } from '../../Redux/Product/product-selector'
import { DetailContainer } from './styles'
import ProgressBar from '../../Components/Progress-bar/bar'

class DetailsPage extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        const { productId } = this.props.match.params
        const { detail_start } = this.props
        detail_start(productId)
    }

    render() {
        const { productId } = this.props.match.params
        return (
            <DetailContainer>
                <Header></Header>
                {
                    this.props.product ?
                        <React.Fragment>
                            <ProductData prodId={productId} />
                            <ProductSeller />
                            <ProductDesc />
                        </React.Fragment>
                        :
                        <ProgressBar></ProgressBar>
                }                
            </DetailContainer>
        )
    }
}

const stateProps = createStructuredSelector({
    product: pullDetails
})

const dispatchProps = dispatch => ({
    detail_start: (prodId) => dispatch(detail_start({ prodId }))
})

export default connect(stateProps, dispatchProps)(DetailsPage)