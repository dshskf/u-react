import React from 'react';
import { CartSeller, Image, LinkButton } from './styles';

class Seller extends React.Component {
	render() {
		const { seller } = this.props;
		return (
			<CartSeller>
				<Image src={"https://cdn3.iconfinder.com/data/icons/flat-artistic-common-6/32/home-link-512.png"} />
				<LinkButton to={'/seller-detail/' + seller.sellerId}>{seller.sellerName}</LinkButton>
			</CartSeller>
		);
	}
}

export default Seller;
