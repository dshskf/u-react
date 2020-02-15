import styled, { css } from 'styled-components';

export const input_textArea_part = css`
	width: 10rem;
	height: 2rem;
	margin: 0 1rem;
	display: block;
	padding-left: 5px;
	outline: none;
	resize: none;
	width: 80%;
	border: 1px solid rgba(80, 80, 80, 0.19);
`;

/* ------------------------------ Add container ----------------------------- */
export const AddContainer = styled.div`
	width: 50%;
`;

export const AddParagraph = styled.p`
	color: #393939;
	margin: 0;
	height: 1.5rem;
	font-size: 0.8rem;
	font-weight: bold;
	margin: 0rem 1rem;
	margin-top: 1rem;
`;

export const Input = styled.input`
	${input_textArea_part}	
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

export const AddTextArea = styled.textarea`
	height: 13rem !important;
	${input_textArea_part}
`;

/* ---------------------------------- Price --------------------------------- */

export const ProductPrice = styled.div`
	position: relative;
	width: 100%;

	input {
		padding-left: 3.5rem;
	}
`;

export const PriceSpan = styled.span`
	position: absolute;
	left: 1.5rem;
	font-weight: bold;
	color: #6d6d6d;
	border-right: 1px solid rgba(195, 193, 193, 0.37);
	padding: 0.39rem;
	padding-right: 0.7rem;
`;
