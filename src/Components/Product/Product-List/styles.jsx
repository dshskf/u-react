import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const buttonPath = css`
	text-decoration: none;
	border: none;
	border: 1px solid black;
	position: absolute;
	bottom: 2rem;
	right: 2rem;
	width: 5rem;
	height: 2rem;
	z-index: 10;
`;

const buttonEditPath = css`
	${buttonPath}
	bottom: 4.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background: black;
	color: white;
	transform-origin: left;
	transition: all 0.2s;

	&:hover {
		color: white;
		background: greenyellow;
		border: 1px solid greenyellow;
	}
`;

const buttonDetailPath = css`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
`;


export const ProductImage = styled.div`
	img {
		width: 100%;
		height: 17rem !important;
	}
`;

export const ProductDetail = styled.div``;

export const SubmitButton = styled.input`
	${buttonPath}
	background: white;
	transition: all 0.2s;

	&:hover {
		border: 1px solid red;
		color: red;
	}
`;

export const LinkButton = styled(Link)`
	${(props) => (props.editbutton ? buttonEditPath : buttonDetailPath)}
`;
