import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const CartProduct = styled.div`
	min-width: 40rem;
	width: 100%;
	margin-top: 2rem;
	padding-bottom: 2rem;
	height: 8rem;
	overflow: hidden;
	display: grid;
	grid-template-columns: 10% 10% 30% 15% 20% 10%;
	align-items: center;
	border-bottom: 1px solid rgba(72, 72, 72, 0.19);
`;

export const CartImage = styled.img`
	width: 5rem;
	height: 5rem;
`;

export const CartDetail = styled.div`
	margin: 0 3rem;
	width: 10rem;
`;

export const CartVariant = styled.div`
	
	p {
		font-weight: bold;
		text-transform: capitalize;
		color: grey;
	}
`;

export const CartPrice = styled.div`
	font-size: 1.2rem;
	margin-left: 2rem;
`;

export const CartSymbols = styled.div`
	margin-left: 3rem;
`;

export const Input = styled.input`
	background: transparent;
	border: none;
	outline: none;
	font-weight: bold;
	font-size: 1.4rem;
	margin: ${(props) => (props.checkBox ? '0 2rem' : '')};
`;

export const LinkButton = styled(Link)`
	font-size: 1.3rem;
	text-decoration: none;
	color: grey;
`;
