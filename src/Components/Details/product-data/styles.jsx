import styled from 'styled-components';

export const ProductContainer = styled.div`
	margin: 0rem auto;
	min-width: 60rem;
	height: 30rem;
	width: 85vw;
	display: grid;
	grid-template-columns: 40% 60%;
	margin-top: 7rem;
	overflow: hidden;
`;

export const DataImage = styled.div`
	img {
		width: 100%;
		height: 30rem;
	}
`;

export const SubProduct = styled.div`
	margin-left: 4rem;
	display: grid;
	grid-template-rows: ${props => props.isErr ? "25% 30% 10% 15% 20%" : "25% 35% 20% 20%"};
	
`;

export const SubPart = styled.div`
	&:nth-child(1) {
		border-bottom: 3px solid black;
		* {
			margin: 1rem;
		}
	}
	&:nth-child(2),
	&:nth-child(3),
	&:nth-child(4) {
		display: flex;
		align-items: center;
		margin:0 1rem;
	}
	label {
		font-weight: bold;
		margin: 0.5rem 0;
		margin-right: 1rem;
	}
`;

export const Buy = styled.div`
	width: 20%;
	display: inline-block;
`;

export const CartContainer = styled.div`
	width: 20%;
	display: inline-block;
`;

export const Input = styled.input`
	background: ${(props) => (props.addCart ? 'white' : 'black')};
	color: ${(props) => (props.addCart ? 'black' : 'white')};
	border: ${(props) => (props.addCart ? '1px solid black' : 'none')};
	padding: 1rem 2.5rem;

	&:hover {
		background: none;
		border: 1px solid #00ffe3;
		color: #00fce0;
		box-shadow: 1px 1px 10px #00ffe3;
		font-weight: bold;
		transition: 0.5s;
	}
`;

export const InputNumber = styled.input`
	border: none;
	border-bottom: 1px solid gray;
	text-align: center;
	outline:none;

	::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;
