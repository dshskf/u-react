import React from 'react';
//import './input.scss';
import { InputContainer, Input, Labels } from './styles';

class InputField extends React.Component {
	render() {
		const { labelText, type, name, passValue, changeHandler } = this.props;
		return (
			<InputContainer>
				<Labels
					className={passValue ? 'isFilled' : 'notFilled'}					
					isFilled={passValue ? true : false}>
					{labelText}
				</Labels>
				<Input type={type} id={name} name={name} onChange={changeHandler} />
			</InputContainer>
		);
	}
}

export default InputField;
