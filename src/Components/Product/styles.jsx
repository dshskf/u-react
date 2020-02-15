import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const addProduct = css`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const ProductContainer = styled.div`
	margin-top: 3rem;
	width: ${props => props.isSellerPage ? "100%" : "90%"};
	margin: 0.5rem auto;
`;

export const ProductPart = styled.div`
	display: flex;	
	justify-content:${props => props.isSellerPage ? "center" : ""};
	align-items:center;
	flex-wrap: wrap;
`;

export const ProductListContainer = styled.div`
	width: ${props => props.isSellerPage ? "45%" : "32%"};
	height: 25rem;
	border: 1px solid rgba(181, 181, 181, 0.56);
	box-shadow: 7px 7px 10px rgba(128, 128, 128, 0.4);
	margin:${props => props.isSellerPage ? "0 0.5rem" : "0 0.5rem"}; ;
	margin-top: 1rem;
	cursor: pointer;
	position: relative;
	${(props) => (props.addproduct ? addProduct : null)}

	&:hover {
		transform: scale(1.05);
		transition: 0.5s;
	}

	h2,
	h3 {
		color: #363636;
		margin: 1rem;
	}
`;

export const LinkButton = styled(Link)`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
`;

export const ProductText = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 15rem;
	width: 15rem;
	border: 3px dashed rgba(128, 128, 128, 0.164);
	
	p {
		font-size: 8rem;
		color: rgba(128, 128, 128, 0.164);
	}
`;
