import styled from 'styled-components';

export const ErrorContainer = styled.div`
	background: transparent;
	color: ${props => props.success ? "green" : "red"};
	padding: 0.5rem 1rem;
	margin: 0.5rem 0;
	text-align: center;
`;
