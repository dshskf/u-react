import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import SendEmail from '../../Components/send-email/send'
import InputField from '../../Components/Input-Field/input';
import ErrorBox from '../Error-box/error';
import { signin_start } from '../../Redux/User/user-action';
import { pullUser, pullError } from '../../Redux/User/user-selector';

import { FormInput, LoginLink, SubmitButton, InputButton, ShowBoxButton, SignContainer, TextLogo } from './styles';

class LoginForm extends React.Component {
	state = {
		email: null,
		password: null,
		show: false
	};

	signIn_API = async (e) => {
		e.preventDefault();
		const { signin_start } = this.props;
		signin_start(this.state.email, this.state.password);		
	};

	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({
			[name]: value
		});
	};

	showResetBox = () => {
		this.setState({ show: !this.state.show })
	}

	render() {
		return (
			<SignContainer>
				<FormInput>
					{
						this.props.user ? document.getElementById('goHome').click() : null
					}
					<TextLogo>U-Store</TextLogo>
					{
						this.props.errData ?
							(
								<ErrorBox errMsg={this.props.errData} />
							)
							:
							null
					}
					<InputField
						labelId='labels2'
						labelText='Email'
						type='email'
						name='email'
						passValue={this.state.email}
						changeHandler={this.handleChange}></InputField>
					<InputField
						labelId='labels4'
						labelText='Password'
						type='password'
						name='password'
						passValue={this.state.password}
						changeHandler={this.handleChange}></InputField>
					<Link id='goHome' to='/'></Link>
					<LoginLink>
						<ShowBoxButton onClick={this.showResetBox} to='/signup'>Forgot Password?</ShowBoxButton>
						<SendEmail showHandler={this.showResetBox} sendMail={this.state.show}></SendEmail>
					</LoginLink>
					<SubmitButton>
						<InputButton type='submit' value='Login' onClick={this.signIn_API} />
					</SubmitButton>
				</FormInput>
			</SignContainer>
		);
	}
}

const stateProps = createStructuredSelector({
	user: pullUser,
	errData: pullError
});

const dispatchProps = (dispatch) => ({
	signin_start: (email, password) => dispatch(signin_start({ email, password }))
});

export default connect(stateProps, dispatchProps)(LoginForm);
