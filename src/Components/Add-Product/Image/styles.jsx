import styled, { css } from 'styled-components';

export const imageMain = css`
	margin: 1rem 0;
	margin-left: 1.5rem;
	border: 3px dashed rgba(80, 80, 80, 0.19);
	width: 8.5rem;
	height: 10rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: relative;
`;

export const InputImage = styled.div`
	height: 15rem;
	border: 1px solid rgba(80, 80, 80, 0.19);
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	overflow: auto;
`;

export const AddImage = styled.div`
	${imageMain}
	display:${props => props.editprod ? "none !important" : "flex !important"}
`;

export const UploadImage = styled.div`
	${imageMain}
	border: none;

	img {
		width: 100%;
		height: 100%;
	}
`;

export const RemoveImage = styled.div`
	${imageMain}
	display: none;
	cursor: pointer;
	display:${props => props.editprod ? "flex !important" : "none !important"}
`;

export const Span = styled.span`
	font-size: 3rem;
	color: rgba(80, 80, 80, 0.19);
	margin-top: 2rem;
`;

export const Paragraph = styled.p`
	color: rgba(80, 80, 80, 0.19);
`;

export const Input = styled.input`
	width: 100%;
	height: 100%;
	position: absolute;
	background: transparent;
	border: none;
	outline: none;
	cursor: pointer;
	display: ${(props) => (props.selectFile ? 'none' : 'block')};
`;
