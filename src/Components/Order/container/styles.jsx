import styled, { css } from 'styled-components';

export const orderPath = css`
	display: grid;	
	grid-template-columns: 20% 25% 25% 20% 10%;
	text-align: center;
	justify-content: center;
	align-items: center;
`;

export const OrderPath = styled.div`
	width: 90vw;
	height: auto;
	margin:2rem auto;
`;

export const SubOrder = styled.div`
	${orderPath}
	* {
		border-bottom: 1px solid rgba(0, 0, 0, 0.18);
		padding: 2rem 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const OrderTitle = styled.div`
	${orderPath}
	* {
		border-right: 1px solid gray;
		background: black;
        color: white;
        padding: 1rem 0;
		margin: 0;
	}
`;

export const InvoiceButton = styled.input`
	cursor: pointer;
	background: none;
	padding: 2.1rem 0;
	outline: none;
	border: none;
	border-bottom: 1px solid rgba(0, 0, 0, 0.18);
`;

export const EmptyContainer = styled.h1`
	color:gray;
	width:100%;
	height:50vh;
	display:flex;
	justify-content:center;
	align-items:center;

	h1{
		color:gray;
		font-size:1.5rem;
	}
`
