import React from 'react';
import { Variant } from './styles';

class Variants extends React.Component {
	render() {
		const { arrVar, selected } = this.props;
		return (
			<Variant>
				<ul>
					{
						arrVar.map((variant, index) => {
							return (
								<li key={index}>
									<input
										type='radio'
										value={variant}
										name='radio'
										id={`radio${index}`}
										onChange={selected}
									/>
									<label htmlFor={`radio${index}`}>{variant}</label>
								</li>
							);
						})
					}
				</ul>
			</Variant>
		);
	}
}

export default Variants;
