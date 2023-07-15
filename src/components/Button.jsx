import React from 'react';

const Button = ({ text, type, disabled }) => {
	return (
		<button
			className='btn'
			type={type}
			disabled={disabled}>
			{text}
		</button>
	);
};

export default Button;
