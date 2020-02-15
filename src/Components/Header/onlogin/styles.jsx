import styled from 'styled-components';

export const DropMenu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const ImageContainer = styled.div`
	width: 10rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const MenuContainer = styled.div`
	position: absolute;
	margin-left: 1rem;
	top: 3rem;
	left: -1.5rem;
	width: 10rem;
	height: auto;
	border: 1px solid rgba(72, 72, 72, 0.12);
	background: white;
	display: ${(props) => (props.isShow ? 'flex !important' : 'none !important')};
	flex-direction: column;

	* {
		color: gray;
		text-decoration: none;
		margin: 0.3rem 0;
	}
`;

export const MenuItem = styled.div`
	display: grid;
	grid-template-columns: 25% 70%;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	&:nth-child(1) {
		margin: 0;
	}

	&:hover {
		background: black;
		color: white;

		label,
		a {
			color: white;
		}
	}
`;

export const IconLabel = styled.label`
	color: gray;
	font-size: 1.25rem;
	margin: 0 0.5rem;
`;

export const Paragraph = styled.p`
	color: gray;
	cursor: pointer;
	margin-left: 0.5rem;
	font-size: 1.5rem;
`;

export const Image = styled.img`
	width: 2.3rem;
	height: 2.3rem;
	border: 3px solid black;
	border-radius: 50%;
`;

export const SubmitButton = styled.input`
	background: black;
	color: white;
	border: none;
	width: 80%;
	cursor: pointer;
	padding: 0.5rem 1rem;
	text-align: center;
	margin: 0.5rem auto;
`;
