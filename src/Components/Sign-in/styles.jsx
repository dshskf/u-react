import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignContainer = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LoginLink = styled.div`
	font-size: 0.9rem;
	text-align: center;
	margin-bottom: 0.8rem;
	margin-top: -0.4rem;
	text-decoration: underline;
`;

export const FormInput = styled.div`
	margin: 0rem auto;
	width: 20%;
	text-align:center;	
`;

export const SubmitButton = styled.div`
	width: 100%;
	position: relative;
	text-align: center;
`;

export const InputButton = styled.input`
	padding: 0;
	height: 2rem;
	width: 50%;
	background: black;
	color: white;
	font-weight: bold;
	font-size: 1rem;
	border-radius: 10px;
	border: none;
`;

export const ShowBoxButton = styled.p`
	color: black;
	text-decoration: none !important;
	cursor: pointer;
`;

export const TextLogo = styled(Link)`
	font-size: 3rem;
	letter-spacing:0.2rem;
	font-weight: bold;
	color: black;
	text-decoration: none;
`;
