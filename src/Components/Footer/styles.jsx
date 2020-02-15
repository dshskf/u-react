import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
	width: 100%;
	height: 4rem;
	background: black;
	color: white;
	display: flex;
	border: none;
	justify-content: center;
	align-items: center;	
`;

export const LinkButton = styled(Link)`
	color: white;
	text-decoration: none;
	margin: 0 1rem;
`;
