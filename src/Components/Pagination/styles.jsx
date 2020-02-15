import styled from 'styled-components';

export const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 15rem;
	margin: 5rem auto;
`;

export const InputButton = styled.input`
	cursor: pointer;
	color: ${(props) => (props.isSelected ? 'black' : 'gray')};
	border: none;
	background: none;
	outline: none;
	margin: 0 1rem;
	font-weight: ${(props) => (props.isSelected ? 'bold' : 'normal')};
`;
