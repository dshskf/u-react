import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MaskContainer = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	background: rgba(32, 32, 32, 0.29);
	top: 0;
	left: 0;
	z-index: 1;
`;

export const SendBox = styled.div`
	position: absolute;
	background: white;
	z-index: 2;
	width: 30%;
	min-height: 40%;
	height:auto;
	left: 35%;
	top: 30%;
`;

export const InputField = styled.input`
	color: gray;
	height: 2rem;
	width: 20rem;
	border-radius: 5px;
	margin: 2rem auto;
	outline: none;
	padding-left: 0.2rem;
	border: 1px solid rgba(32, 32, 32, 0.2);
`;

export const Logo = styled(Link)`
	text-decoration: none;
	font-size: 2rem;
	font-weight: bold;
	display: block;
	color: black;
	margin-top: 2rem;
`;


export const UserButton = styled.input`
	background: ${(props) => (props.cancel ? 'transparent' : 'black')};
	color: ${(props) => (props.cancel ? 'black' : 'white')};
	border: ${(props) => (props.cancel ? '1px solid black' : 'none')};
    padding: 0.5rem 1rem;
    width: 20rem;
    margin:0.5rem auto;
    transition:all 0.2s;

    &:hover{
        background: ${(props) => (props.cancel ? 'transparent' : 'rgb(66,133,244)')};
	color: ${(props) => (props.cancel ? 'red' : 'white')};
	border: ${(props) => (props.cancel ? '1px solid red' : 'none')};
    }
`;
