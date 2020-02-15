import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
	width: 100%;
	position: relative;
	margin: 1rem auto;
`;

export const Labels = styled.div`
	position: absolute;
	color: grey;
	font-size: 0.9rem;
	pointer-events: none;

	${(props) => (props.isFilled ? isFilled : notFilled)}
`;

export const Input = styled.input`
	color: gray;
	width: 100%;
	height: 2.2rem;
	margin: 0.5rem 0;
	outline: none;
	border-radius: 7px;
	padding-left: 0.5rem;
	border: 1px solid rgba(128, 128, 128, 0.33);

	&:focus {
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
	}
`;

const isFilled = css`
	top: -1rem !important;
	left: 0 !important;
	font-size: 0.7rem !important;
	transition: 0.3s;
`;

const notFilled = css`
	top: 1rem;
	left: 0.5rem;
	transition: 0.3s;
`;
