import { Link, useNavigate } from 'react-router-dom';
import avatar from '../assets/images/avatar.png';
import { useBooksContext } from '../context/BooksContext';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';

const Header = ({ show = 'flex' }) => {
	const navigate = useNavigate();
	const {
		state: { cartState },
	} = useBooksContext();

	const signOut = () => {
		localStorage.removeItem('validUser');
		localStorage.removeItem('userName');
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
						className='user__cart btn'>
						<span className='user__cart-count'>
							{cartState.totalBooks ? cartState.totalBooks : 0}
						</span>
						{cartState.totalBooks ? (
							<ShoppingCartCheckoutOutlinedIcon />
						) : (
							<ProductionQuantityLimitsOutlinedIcon />
						)}
					</Link>
					<span className='user__avatar'>
						<img
							src={avatar}
							alt='user avatar'
						/>
					</span>
					<span className='user__profile-link'>
						{localStorage.getItem('userName')}
					</span>{' '}
					<button
						className='btn'
						onClick={() => signOut()}>
						<span>Sign Out</span>
						<LogoutOutlinedIcon />
					</button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
