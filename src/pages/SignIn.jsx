import React, { useEffect } from 'react';
import { Button, Header } from '../components';
import avatar from '../assets/images/avatar.png';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SingIn = () => {
	const { isAuth, setIsAuth, userName, setUserName } = useAuthContext();
	const navigate = useNavigate();

	const logIn = () => {
		if (userName.length <= 3) {
			console.log('Name is to short', userName);
		} else if (userName.length >= 16) {
			console.log('UserName is to long', userName);
		} else {
			setIsAuth(true);
		}
	};

	useEffect(() => {
		if (isAuth) {
			return navigate('/');
		}
	}, [isAuth]);

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
							text='Sign In'
						/>
					</div>
				</div>
			</form>
		</>
	);
};

export default SingIn;
