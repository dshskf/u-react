import React from 'react';
import { ProductDescription } from './styles';

import { pullDetails } from '../../../Redux/Product/product-selector';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Footer from '../../Footer/footer'

class ProductDesc extends React.Component {
	render() {
		const { products } = this.props.product
		return (
			<React.Fragment>
				<ProductDescription>
					<p>
						{products.description}
					</p>					
				</ProductDescription>
				<Footer></Footer>
			</React.Fragment>

		);
	}
}

const stateProps = createStructuredSelector({
	product: pullDetails
})

export default connect(stateProps)(ProductDesc);
