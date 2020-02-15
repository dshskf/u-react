import styled, { css } from 'styled-components';

const qtyHandler = css`
	background: black;
	border: none;
	width: 1.5rem;
	height: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
`;
const numberInput = css`
	width: 4rem;
	height: 2rem;
	border: none;
	text-align: center;
`;

export const CartQuantity = styled.div`
	display: flex;
	margin-top:1rem;
`;

export const Input = styled.input`
	${(props) => (props.numberinput ? numberInput : qtyHandler)}
		::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;
