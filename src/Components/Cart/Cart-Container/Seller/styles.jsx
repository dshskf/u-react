import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartSeller = styled.div`
	min-width: 40rem;
	width:100%;
	height: 4rem;
	border-bottom: 1px solid rgba(72, 72, 72, 0.19);
	display: flex;
	align-items: center;
	background: rgba(0, 0, 0, 0.86);
`;

export const Image = styled.img`
	border: 2px solid #ffce00;
	margin: 0 1rem;
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
`;

export const LinkButton = styled(Link)`
	text-decoration: none;
	color: white;
	font-weight: bold;
`;
