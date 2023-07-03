import { useNavigate } from 'react-router-dom';
import { Button } from '.';
import avatar from '../assets/images/avatar.png';
import cartImg from '../assets/images/cart.svg';
import { useAuthContext } from '../context/AuthContext';

const Header = () => {
	const { isAuth, userName, setIsAuth, setUserName } = useAuthContext();
	const navigate = useNavigate();

	const signOut = () => {
		setIsAuth(false);
		setUserName('');
		// console.log('SingOut');
		return navigate('/signin');
	};

	// useEffect(() => {
	// 	if (!isAuth) {
	// 	}
	// }, [isAuth]);

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
				<div className={`user ${isAuth ? 'flex' : 'hide'}`}>
					<a
						href='.'
						className='user__cart'>
						<img
							src={cartImg}
							alt='Cart'
						/>
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
						{userName}
					</a>
					<span
						className='btn'
						onClick={() => signOut()}>
						out
					</span>
					<Button
						text='Sign Out'
						onClick={() => console.log('out')}
					/>
				</div>
			</nav>
		</header>
	);
};

export default Header;
