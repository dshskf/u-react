import React from 'react';
import { connect } from 'react-redux';

import { delete_start } from '../../../Redux/Product/product-action';
import {
	ProductImage,
	LinkButton,
	SubmitButton,
	ProductDetail
} from './styles';
import { ProductListContainer } from '../styles';

class ProductList extends React.Component {
	deleteProducts = (e) => {
		e.preventDefault();
		const { delete_start } = this.props;
		delete_start(e.target.id);
	};

	render() {
		const { title, imgSource, price, productId, isEditPage, sellerPage } = this.props;
		return (
			<ProductListContainer isSellerPage={sellerPage}>
				<ProductImage>
					<img src={imgSource} alt="" />
				</ProductImage>
				<h2>{title}</h2>
				<h3>Rp {price}</h3>
				{
					isEditPage ?
						(
							<React.Fragment>
								<LinkButton
									to={'/edit-product/' + productId}
									id='edit-button'
									editbutton
								>
									EDIT
								</LinkButton>
								<SubmitButton
									type='submit'
									id={productId}
									onClick={this.deleteProducts}
									value='Delete'
								/>
							</React.Fragment>
						) : null}
				<ProductDetail>
					<LinkButton to={'/product/' + productId}></LinkButton>
				</ProductDetail>
			</ProductListContainer>
		);
	}
}

const dispatchProps = (dispatch) => ({
	delete_start: (prodId) => dispatch(delete_start({ prodId }))
});

export default connect(null, dispatchProps)(ProductList);
