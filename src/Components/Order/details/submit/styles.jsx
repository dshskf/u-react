import styled from 'styled-components';

export const OrderSubmit = styled.div`	
	display: flex;
	justify-content: space-between;
	min-width: 22rem;
	width: 80%;
    margin: 0 auto;
    margin-top: 1rem;
`;

export const InputButton = styled.input`
	outline: none;
	text-decoration: none;
	border: ${(props) => (props.paybutton ? 'none' : '1px solid black')};
	padding: 0.5rem 1rem;
	background: ${(props) => (props.paybutton ? 'black' : 'none')};
	color: ${(props) => (props.paybutton ? 'white' : 'black')};
`;
