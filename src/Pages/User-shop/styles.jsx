import styled from 'styled-components';

export const SellerContainer = styled.div`
	width: 50vw;
	height: auto;
	margin: 0 auto;
`;

export const SubSeller = styled.div`
	height: 50vh;
	width: 100%;
	margin: 0 auto;
	display: grid;
	grid-template-rows: 60% 40%;
	position: relative;
	font-family: sans-serif;
	border-bottom: 1px solid rgba(57, 57, 57, 0.2);
	padding-bottom: 2rem;
`;

export const TopPart = styled.div`
	background: black;
	width: 100%;
	height: 100%;
`;

export const BottomPart = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 3.5rem;
	* {
		margin: 0.5rem;
	}
	p {
		color: gray;
		margin-top: 0;
		font-weight: bold;
	}
`;

export const Image = styled.img`
	width: 7rem;
	height: 7rem;
	position: absolute;
	top: 9rem;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	border: 5px solid white;
	border-radius: 50%;
`;
