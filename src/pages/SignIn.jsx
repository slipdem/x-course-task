import React from 'react';
import { Button, Header } from '../components';
import avatar from '../assets/images/avatar.png';

const SingIn = () => {
	return (
		<>
			<Header />
			<section className='signIn'>
				<div className='signIn-user'>
					<div className='signIn-user__img'>
						<img
							src={avatar}
							alt='user avatar'
						/>
					</div>
					<div className='signIn-user__input'>
						<label htmlFor='usernameInput'>Username</label>
						<input
							type='text'
							name='username'
							id='usernameInput'
							placeholder='Type your username'
						/>
						<Button text='Sign In' />
					</div>
				</div>
			</section>
		</>
	);
};

export default SingIn;
