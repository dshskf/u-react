import styled, { css } from 'styled-components';

const inputHandler = css`
	height: 2rem;
`;

export const InputVariant = styled.div`
	display: grid;
	grid-template-rows: 17% 20% 60%;
	height: 35%;
	width: 100%;
`;

export const Variant = styled.div`
	height: 8rem;
	width: 100%;
	border: 1px solid rgba(80, 80, 80, 0.19);
	display: flex;
	flex-wrap: wrap;
	overflow: auto;
`;

export const SubInput = styled.div`
	display: flex;
`;

export const SubVariant = styled.div`
	margin-left: 1rem;
	margin-top: 1rem;
`;

export const Paragraph = styled.p`
	color: gray;
	display: flex;
	align-items: center;
	padding: 0.5rem 0.8rem;
	background: transparent;
	border: 1px solid gray;
`;

export const Span = styled.span`
	cursor: pointer;
	margin-top: -2px;
	margin-left: 0.5rem;
`;

export const InputLabel = styled.label`
	margin-top: 1rem;
	font-weight: bold;
	font-size: 0.8rem;
	height: 1rem;
	width: 100%;
`;

export const TextInput = styled.input.attrs({ type: 'text' })`
	${inputHandler}
	width: 90%;
	padding-left: 0.5rem;
	border: 1px solid rgba(80, 80, 80, 0.19);
`;

export const SubmitButton = styled.input.attrs({
	type: 'submit',
	value: 'ADD'
})`
	${inputHandler}
	color: white;
	display: flex;
	align-items: center;
	padding: 0rem 0.8rem;
    background: black;
    border:none;
	cursor: pointer;
	margin: 0;
`;
