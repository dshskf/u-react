import React from 'react';
import { AddressDetail, AddressContainer, AddressBox } from './styles';

class Detail extends React.Component {
	render() {
		const { username, address } = this.props;
		return (
			<AddressDetail>
				<h2>{username}</h2>
				<AddressContainer>
					<i className='material-icons'>&#xE55F;</i>
					<AddressBox>
						<p> {address}</p>
					</AddressBox>
				</AddressContainer>
			</AddressDetail>
		);
	}
}

export default Detail;
