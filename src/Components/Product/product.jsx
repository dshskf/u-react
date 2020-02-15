import React from 'react';
import ProductList from './Product-List/list';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { pullUser } from '../../Redux/User/user-selector';
import { pullProduct } from '../../Redux/Product/product-selector';

import { ProductContainer, ProductPart, ProductListContainer, LinkButton, ProductText } from './styles';
import { ProductDetail } from './Product-List/styles';

import ProgressBar from '../Progress-bar/bar'

class Product extends React.Component {
	render() {
		const { isEditPage, sellerShopPage } = this.props;
		return (
			<ProductContainer isSellerPage={sellerShopPage}>
				<ProductPart isSellerPage={sellerShopPage}>
					{
						isEditPage && this.props.product ?
							(
								<ProductListContainer addproduct>
									<ProductText>
										<p>+</p>
									</ProductText>
									<h2>ADD PRODUCT </h2>
									<ProductDetail>
										<LinkButton to='/add-product/' />
									</ProductDetail>
								</ProductListContainer>
							)
							:
							null
					}
					{
						this.props.product ?
							(
								this.props.product.map(({ _id, name, price, productImg }) => {
									return (
										<ProductList
											key={_id}
											productId={_id}
											title={name}
											imgSource={`http://localhost:9000/${productImg[0]}`}
											price={price}
											isEditPage={isEditPage}
											sellerPage={sellerShopPage}
										></ProductList>
									);
								})
							)
							:
							(
								<ProgressBar></ProgressBar>
							)
					}
				</ProductPart>
			</ProductContainer>
		);
	}
}

const stateProp = createStructuredSelector({
	user: pullUser,
	product: pullProduct
});

export default connect(stateProp)(Product);
