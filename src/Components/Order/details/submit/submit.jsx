import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OrderSubmit, InputButton } from './styles';

export class Submit extends Component {
	render() {
		return (
			<OrderSubmit>
				<InputButton type='submit' value='Cancel' onClick={this.props.show} />
				<InputButton type='submit' value='Pay Now!' paybutton/>
			</OrderSubmit>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Submit);
