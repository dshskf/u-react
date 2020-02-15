import React from 'react';
import { CartSubmit, CartTotal } from './styles';

class SubmitCart extends React.Component {
	render() {
		const { totalPrice } = this.props;
		return (
			<CartSubmit>
				<CartTotal>
					<p>TOTAL: Rp {totalPrice || 0}</p>
				</CartTotal>
			</CartSubmit>
		);
	}
}

export default SubmitCart;
