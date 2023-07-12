import React, { useEffect, useState } from 'react';
import { Button, Header } from '../components';
import avatar from '../assets/images/avatar.png';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SingIn = () => {
	const { isAuth, setIsAuth, userName, setUserName } = useAuthContext();
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate();

	const logIn = () => {
		if (userName.length <= 3) {
			setDisabled(true);
		} else if (userName.length >= 16) {
			setDisabled(true);
		} else {
			setDisabled(false);
			setIsAuth(true);
		}
	};

	useEffect(() => {
		if (isAuth) {
			return navigate('/');
		}
	}, [isAuth, disabled]);

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
							value={userName}
							onChange={(e) => setUserName(e.target.value.trim())}
							autoFocus
							autoComplete='off'
						/>
						<Button
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
