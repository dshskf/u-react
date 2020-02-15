import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartSubmit = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	height: 3rem;
`;

export const CartTotal = styled.div`
	position: absolute;
	font-weight: bold;
	right: 0;
	height: 100%;
	color: #ff8900;
	width: 15rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const CartBuy = styled.div`
	position: absolute;
	right: 2rem;
	height: 2.5rem;
	background: black;
	width: 6rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const LinkButton = styled(Link)`
	color: white;
	text-decoration: none;
`;
