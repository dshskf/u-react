import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const input_link = css`	
	height: 2.5rem;
	font-size: 1rem;
	width:80%;
	margin:0 auto;
	margin-bottom:1rem;
`;

export const DetailContainer = styled.div`
	margin:0 auto;
`;

export const BuyDetail = styled.div`
	min-width: 35rem;
	width:70%;
	background: #ffffff;
	border: 1px solid rgba(96, 96, 96, 0.19);
	min-height:50vh;
	height:auto;
`;

export const HeadText = styled.h1`
	text-align: center;
	border-bottom: 1px solid black;
	width: 80%;
	margin: 1rem auto;
	padding: 1rem;
`;

export const PriceDetail = styled.div`
	width: 80%;
	margin: 2rem auto;
	position: relative;
`;

export const PostButton = styled.div`
	margin-top: 3rem;
	width: 35rem;
	display: block;	
`;

export const Input = styled.input`
	${input_link}	
	margin-bottom:3rem;
	color: white;
	background: black;
	border: none;
`;

export const LinkButton = styled(Link)`
	${input_link}			
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid black;
	background: white;
	color: black;
`;
