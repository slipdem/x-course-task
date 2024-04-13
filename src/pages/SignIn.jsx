import React, { useState } from 'react';
import avatar from 'assets/images/avatar.png';
import { useNavigate } from 'react-router-dom';

const SingIn = () => {
	const [validUserName, setValidUserName] = useState('');
	const [userName, setUserName] = useState('');
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate();

	const logIn = () => {
		if (userName) {
			return navigate('/');
		}
	};

	const handleInputChange = (value) => {
		setValidUserName(value);
		if (value.length < 4 || value.length > 16) {
			setDisabled(true);
			localStorage.setItem('validUser', false);
		} else {
			setDisabled(false);
			setUserName(validUserName);
			localStorage.setItem('validUser', true);
			localStorage.setItem('userName', value);
		}
	};

	return (
		// <Header show='hide' />
		<form
			className='signIn'
			onSubmit={(e) => {
				e.preventDefault();
				logIn();
			}}>
			<div className='signIn-user'>
				<div className='signIn-user__img'>
					<img
						src={avatar}
						alt='user avatar'
					/>
				</div>
				<div className='signIn-user__input'>
					<label htmlFor='usernameInput'>UserName</label>
					<input
						type='text'
						name='username'
						id='usernameInput'
						placeholder='Type your username'
						value={validUserName}
						onChange={(e) => handleInputChange(e.target.value.trim())}
						autoFocus
						autoComplete='off'
					/>
					<button
						className='btn'
						type='submit'
						disabled={disabled}>
						Sign In
					</button>
				</div>
			</div>
		</form>
	);
};

export default SingIn;
