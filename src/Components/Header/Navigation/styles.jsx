import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserNavigation = styled.div`
	grid-column: 3/4;
	display: flex;
	justify-content: center;
    align-items: center;
    height: 100%;
`;

export const LinkButton = styled(Link)`
	margin: 0 2rem;
	min-width: 4.3rem;
	color: black;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		text-shadow: 0px 0px 10px white;
		transition: 0.3s;
	}
`;

export const InputButton = styled.input`
	background: none;
	border: none;
	margin: 0 2rem;
	min-width: 4.3rem;
	font-size: 1.1rem;
`;
