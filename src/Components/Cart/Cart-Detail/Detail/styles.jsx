import styled from 'styled-components';

export const AddressContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 0.5rem 0;
`;

export const AddressBox = styled.div`
	width: 90%;
	height: auto;
`;

export const AddressDetail = styled.div`
	width: 80%;
	margin: 2rem auto;
	display: flex;
	flex-direction: column;

	h2 {
		margin: 0;
		margin-left: 3rem;
	}

	i {
		color: red;
		width: 3rem;
		font-size: 2rem;
	}
`;
