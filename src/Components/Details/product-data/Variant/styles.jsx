import styled from 'styled-components';

export const Variant = styled.div`
	margin-top: 1rem;
	margin-bottom: 0;
	height: auto;
	max-height:8rem;
	width: 70%;		

	ul {
		list-style: none;		
		height:auto;
		max-height: 7rem;
		overflow:auto;
	}

	li {
		display: inline-block;
		margin: .8rem 0;
		margin-right: 0.5rem;
		
	}

	input {
		visibility: hidden;
	}

	label {
		cursor: pointer;
		padding: 0.5rem 1rem;
		border: 1px solid rgba(203, 203, 203, 0.51);
	}

	input:checked + label {
		background: black;
		color: white;
	}
`;
