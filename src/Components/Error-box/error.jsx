import React, { Component } from 'react';
import { ErrorContainer } from './styles';

export class ErrorBox extends Component {
	render() {
		const { errMsg, isSuccess } = this.props;		
		return (
			<ErrorContainer success={isSuccess}>
				<p>{errMsg}</p>
			</ErrorContainer>
		);
	}
}
export default ErrorBox;
