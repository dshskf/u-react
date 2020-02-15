import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SellerContainer = styled.div`
	margin: 0rem auto;
	margin-top: 3rem;
	padding: 2rem 0;
	border-top: 1px solid rgba(128, 128, 128, 0.45);
	border-bottom: 1px solid rgba(128, 128, 128, 0.45);
	min-width: 60rem;
	height: 25vh;
	width: 85vw;
	display: grid;
	grid-template-columns: 10rem 50% 20%;
	align-items: center;
`;

export const SellerImage = styled.div`
	img {
		margin-left: 2rem;
		width: 7rem;
		height: 7rem;
		border: 4px solid rgba(105, 105, 105, 0.63);
		border-radius: 50%;
	}
`;

export const SellerBox = styled.div`
	* {
		margin: 0.5rem 0.5rem;
	}

	p {
		color: gray;
	}
`;

export const ContactSeller = styled.div`
	text-align: right;
`;

export const ContactSubmit = styled.input`
	background: black;
	color: white;
	padding: 0.5rem 1rem;
	border-radius: 20rem;
	border: 1px solid black;

	&:hover {
		background: white;
		border: 1px solid black;
		color: black;
	}
`;

export const LinkButton = styled(Link)`
	font-size: 1.5rem;
    font-weight: bold;
    text-decoration:none;
    color:black;    
`;
