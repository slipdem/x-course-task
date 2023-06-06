import { Button } from '.';
import avatar from '../assets/images/avatar.png';
import cartImg from '../assets/images/cart.svg';

const Header = () => {
	return (
		<header className='header'>
			<nav className='header__nav'>
				<div className='brand'>
					<a
						href='/'
						className='brand__name'>
						X-course task
					</a>
					<span className='brand__devider'>/</span>
					<span className='brand__userName'>Dmytro Slipchenko</span>
				</div>
				<div className='user'>
					<a
						href='.'
						className='user__cart'>
						<img
							src={cartImg}
							alt='Cart'
						/>{' '}
						<span className='user__cart-count'>3</span>
					</a>

					<span className='user__avatar'>
						<img
							src={avatar}
							alt='user avatar'
						/>
					</span>
					<a
						href='.'
						className='user__profile-link'>
						Username
					</a>
					<Button text='Sign Out' />
				</div>
			</nav>
		</header>
	);
};

export default Header;
