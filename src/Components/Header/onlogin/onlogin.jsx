import React from 'react';
import { connect } from 'react-redux';
import { signout } from '../../../Redux/User/user-action';
import { Link } from 'react-router-dom';

import { DropMenu, ImageContainer, MenuContainer, Paragraph, Image, MenuItem, IconLabel, SubmitButton } from './styles';

class OnLogin extends React.Component {
	state = {
		dropMenu: false,
	};
	dropMenu = () => {
		this.state.dropMenu = !this.state.dropMenu;
		this.setState({ dropMenu: this.state.dropMenu });
	};

	onLogout = (e) => {
		e.preventDefault();
		const { signout } = this.props;
		signout();
	};

	render() {
		return (
			<form onSubmit={this.onLogout}>
				<DropMenu>
					<ImageContainer>
						<Image src={require('../../../Assets/Images/logo.jpg')} alt='' />
						<Paragraph onClick={this.dropMenu}>+</Paragraph>
					</ImageContainer>
					<MenuContainer id='menu-container' isShow={this.state.dropMenu}>
						<MenuItem>
							<IconLabel>&#9998;</IconLabel>
							<Link to='/edit-profile'> Edit Profile</Link>
						</MenuItem>
						<MenuItem>
							<IconLabel>&#9763;</IconLabel>
							<Link to='/user-product'>Product</Link>
						</MenuItem>
						<MenuItem>
							<IconLabel>&#9992;</IconLabel>
							<Link to='/user-order'>Order</Link>
						</MenuItem>
						<MenuItem>
							<IconLabel>&#127963;</IconLabel>
							<Link to='/user-shop'>Shop</Link>
						</MenuItem>
						<SubmitButton type="submit" value='LOGOUT' />
					</MenuContainer>
				</DropMenu>
			</form>
		);
	}
}

const dispatchProps = (dispatch) => ({
	signout: () => dispatch(signout()),
});

export default connect(null, dispatchProps)(OnLogin);
