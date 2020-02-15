import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationBar = styled.div`
	display: grid;
	grid-template-columns: 20% 60% 20%;
	background: white;
	width: 100vw;
	height: 4rem;
	color: black;
	font-family: 'Montserrat', sans-serif;
	position: fixed;
	padding: 0;
	box-shadow: 0px -10px 20px rgba(128, 128, 128, 0.4);
	z-index: 10;
	top: 0;
	left: 0;
`;

export const NavigationTitle = styled.div`
	grid-column: 1/2;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 10rem;
		height: 4rem;
	}
`;

export const LinkButton=styled(Link)`
color:black;
font-size:1.5rem;
font-weight:bold;
text-decoration:none`