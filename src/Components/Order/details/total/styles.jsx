import styled, { css } from 'styled-components';

const totals = css`
	border-top: 1px solid gray;
	margin-top: 0.5rem;
	color: orangered;
`;

export const OrderTotal = styled.div`
	margin-top: 1rem;
	color: black;
	min-width: 22rem;
	width: 80%;
	margin: 0 auto;
`;

export const SubOrderTotal = styled.div`
	display: flex;
	justify-content: space-between;
	${(props) => (props.totalprice ? totals : null)}

	* {
		margin: 0.3rem 0;
	}
	label {
		font-weight: bold;
	}
`;
