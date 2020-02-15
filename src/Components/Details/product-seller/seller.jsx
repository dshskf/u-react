import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { pullDetails } from '../../../Redux/Product/product-selector';
import {
	SellerBox,
	SellerContainer,
	SellerImage,
	ContactSeller,
	ContactSubmit,
	LinkButton,
} from './styles';

class ProductSeller extends React.Component {
	render() {
		const {
			product: { seller },
		} = this.props;
		return (
			<SellerContainer>
				<SellerImage>
					<img src={require('../../../Assets/Images/promo2.jpg')} />
				</SellerImage>
				<SellerBox>
					<LinkButton to={'/seller-detail/' + seller._id}>{seller.username}</LinkButton>
					{seller.address ? <p>{seller.address}</p> : <p>Planet Namek</p>}
				</SellerBox>
				<ContactSeller>
					<ContactSubmit type='submit' value='Contact Seller' />
				</ContactSeller>
			</SellerContainer>
		);
	}
}

const stateProps = createStructuredSelector({
	product: pullDetails,
});

export default connect(stateProps)(ProductSeller);
