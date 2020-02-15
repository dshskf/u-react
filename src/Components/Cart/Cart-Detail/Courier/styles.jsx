import styled from 'styled-components';

export const Courrier = styled.div`
	border-bottom: 1px dashed rgba(128, 128, 128, 0.22);
	border-top: 1px dashed rgba(128, 128, 128, 0.22);
    padding: 1rem 0;	
    width:80%;
    margin: 2rem auto;
    position: relative;
`;

export const PriceList = styled.div`
	margin: 1rem 0;
	display: flex;
	justify-content: space-between;
	
	span {
		font-weight: bold;
	}
`;

export const Input = styled.input`
	width: 4rem;
	border: none;
	position: absolute;
	right: 0rem;
	font-size: 1rem;
	background: transparent;
`;
