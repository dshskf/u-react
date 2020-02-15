import styled from 'styled-components';
import { ReactComponent as Logo } from '../../../Assets/bag.svg';
import { Link } from 'react-router-dom';

export const SearchContainer = styled.div`
	grid-column: 2/3;
	display: flex;
	align-items: center;
`;

export const SearchBarArea = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const SearchInput = styled.input`
	width: 70%;
	height: 2rem;
	border: none;
	padding-left: 1rem;

	&:focus {
		outline: none;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		box-shadow: 0px 1px 5px rgba(152, 152, 152, 0.39);
		margin: 0;
	}
`;

export const SubmitButton = styled.input`
	height: 2rem;
	background: black;
	border: none;
	color: white;
	cursor: pointer;
	padding: 0.5rem;
	margin: 0;
	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;
	outline: none;
	&:hover {
		background: rgb(33, 32, 32);
		transition: 0.3s;
	}
`;

export const CartArea = styled.div`
	height: 1.75rem;
	width: 2rem;
	margin-left: 2rem;
	position: relative;
	cursor: pointer;
`;

export const BagLogo = styled(Logo)`
	height: 1.75rem;
`;

export const LinkButton = styled(Link)`
	position: absolute;
	left: ${(props) => (props.logo ? '0' : '10px')};
	top: ${(props) => (props.logo ? '0' : '8px')};
	font-weight: bold;
	text-decoration:none;
	font-size: 0.9rem;
`;
