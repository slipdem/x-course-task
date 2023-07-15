import { Link, useNavigate } from 'react-router-dom';
import avatar from '../assets/images/avatar.png';
import cartImg from '../assets/images/cart.svg';

const Header = () => {
	const navigate = useNavigate();

	const signOut = () => {
		localStorage.clear();
		return navigate('/signin');
	};

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
				<div
					className={`user ${
						localStorage.getItem('validUser') === 'true' ? 'flex' : 'hide'
					}`}>
					<Link
						to='/cart'
						className='user__cart'>
						<img
							src={cartImg}
							alt='Cart'
						/>
						<span className='user__cart-count'>3</span>
					</Link>
					<span className='user__avatar'>
						<img
							src={avatar}
							alt='user avatar'
						/>
					</span>
					<span
						href='.'
						className='user__profile-link'>
						{localStorage.getItem('userName')}
					</span>
					<span
						className='btn'
						onClick={() => signOut()}>
						Sign Out
					</span>
				</div>
			</nav>
		</header>
	);
};

export default Header;
