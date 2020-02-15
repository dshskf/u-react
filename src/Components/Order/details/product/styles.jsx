import styled from 'styled-components';

export const OrderProduct = styled.div`
	height: 17rem;
	overflow: auto;
	color: gray;
	min-width: 22rem;
	width: 80%;	
	margin: 0 auto;
`;

export const OrderItem = styled.div`
	height: 6rem;
	display: grid;
	grid-template-columns: 30% 30% 30% 10%;
	align-items: center;
	padding: 0.5rem 0;
	border-bottom: 1px solid rgba(75, 75, 75, 0.31);

	img {
		width: 6rem;
		height: 6rem;
	}
`;
