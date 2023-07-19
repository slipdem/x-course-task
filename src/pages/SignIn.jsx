import React, { useEffect, useState } from 'react';
import { Button, Header } from '../components';
import avatar from '../assets/images/avatar.png';
import { useNavigate } from 'react-router-dom';

const SingIn = () => {
	// const { isAuth, setIsAuth } = useAuthContext();
	const [validUserName, setValidUserName] = useState('');
	const [userName, setUserName] = useState('');
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate();

	const logIn = () => {
		// console.log(userName);
		// if (userName.length < 4) {
		// 	setDisabled(true);
		// } else if (userName.length > 16) {
		// 	setDisabled(true);
		// } else {
		// 	setDisabled(false);
		// 	setIsAuth(true);
		// 	setUserName()
		// 	localStorage.setItem('logIn', true);
		// 	localStorage.setItem('userName', userName);
		// }
		// if
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

	useEffect(() => {
		// 	if (userName) {
		// 		return navigate('/');
		// }
		// }, [isAuth, disabled]);
	}, []);

	return (
		<>
			<Header />
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
						<Button
							type='submit'
							disabled={disabled}
							text='Sign In'
						/>
					</div>
				</div>
			</form>
		</>
	);
};

export default SingIn;
