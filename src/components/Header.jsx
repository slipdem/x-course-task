import { Link, useNavigate } from 'react-router-dom';
import avatar from '../assets/images/avatar.png';
import cartImg from '../assets/images/cart.svg';
import { useBooksContext } from '../context/BooksContext';

const Header = ({ show = 'flex' }) => {
	const navigate = useNavigate();
	const {
		state: { cart },
	} = useBooksContext();

	const signOut = () => {
		localStorage.clear();
		return navigate('/signin');
	};

	return (
		<header className='header'>
			<nav className='header__nav'>
				<div className='brand'>
					<Link
						to='/'
						className='brand__name'>
						X-course task
					</Link>
					<span className='brand__devider'>/</span>
					<span className='brand__userName'>Dmytro Slipchenko</span>
				</div>
				<div className={`user ${show}`}>
					<Link
						to='/cart'
						className='user__cart'>
						<img
							src={cartImg}
							alt='Cart'
						/>
						{/* <span className='user__cart-count'>{cartItems.length}</span> */}
						<span className='user__cart-count'>
							{cart.length ? cart.length : 0}
						</span>
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
