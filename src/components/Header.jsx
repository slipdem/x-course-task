import { Link, useNavigate } from 'react-router-dom';
import avatar from '../assets/images/avatar.png';
import { useBooksContext } from '../context/BooksContext';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';

const Header = ({ show = 'flex' }) => {
	const navigate = useNavigate();
	const {
		state: { cart, totalBooks },
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
							{totalBooks ? totalBooks : 0}
						</span>
						{totalBooks ? (
							<ShoppingCartCheckoutOutlinedIcon />
						) : (
							<ProductionQuantityLimitsOutlinedIcon />
						)}
					</Link>
					<button
						className='btn'
						onClick={() => signOut()}>
						<span>Sign Out</span>
						<LogoutOutlinedIcon />
					</button>
					<span className='user__avatar'>
						<img
							src={avatar}
							alt='user avatar'
						/>
					</span>
					<span className='user__profile-link'>
						{localStorage.getItem('userName')}
					</span>
				</div>
			</nav>
		</header>
	);
};

export default Header;
