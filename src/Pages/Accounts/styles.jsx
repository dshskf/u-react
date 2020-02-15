import styled from 'styled-components';

export const AccountContainer = styled.div`
	display: grid;	
	grid-template-rows: 20% 70%;
	height: 90%;
	min-width: 25rem;
	width: 50%;
    margin: 0rem auto;
    margin-top: 5rem;
`;

export const TitleContainer = styled.div`
	grid-row: 1/2;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 40%;
		height: 8rem;
	}
`;

export const SubForm = styled.div`
	margin: 0rem auto;
	width: 100%;
`;
