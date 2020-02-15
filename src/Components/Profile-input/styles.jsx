import styled, { css } from 'styled-components';

const input = css`
	margin-top: 3.5rem;
	width: 17rem;
	background: black;
	color: white;
	border: none;
	height: 2.5rem;
`;

export const InputButton = styled.input`
	${(props) => (props.category == 'submit' ? input : null)}
`;

export const ProfileField = styled.div`
	height: 4rem;
	position: relative;
	display: flex;
	flex-direction: column;
	width: 17rem;
	margin: 0.2rem 0;

	*:not(label) {
		height: 2rem;
		resize: none;
		outline: none;
		border: none;
		border-bottom: 1px solid #585858;
		color: #4b4b4b;
		background: transparent;
	}

	label {
		margin: 0.1rem 0;
		font-size: 0.8rem;
	}
`;

export const TextArea = styled.textarea`
	width: 100% !important;
	height: 5rem !important;
	border: 1px solid gray !important;
    top: 1.3rem !important;    
	position: absolute !important;
`;
