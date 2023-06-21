import React from 'react';
import cartImage from '../assets/images/cart.svg';
import { Button, Header } from '../components';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
const Cart = () => {
	return (
		<>
			<Header />
			<div className='container'>
				<Button text='Purchase' />
				<div className='cart'>
					{/* <div className='cart__empty'>
						<img
							src={cartImage}
							alt=''
						/>
						<p>Cart is empty...</p>
					</div> */}
					<div className='cart__items'>
						<ul className='cart__list'>
							<li>
								<span>Book name</span>
								<span>Count</span>
								<span>Total Price</span>
								<HighlightOffRoundedIcon color='primary' />
							</li>
							<li>
								<span>Book name</span>
								<span>Count</span>
								<span>Total Price</span>
								<HighlightOffRoundedIcon color='secondary' />
							</li>
							<li>
								<span>Book name</span>
								<span>Count</span>
								<span>Total Price</span>
								<HighlightOffRoundedIcon color='success' />
							</li>
							<li>
								<span>Book name</span>
								<span>Count</span>
								<span>Total Price</span>
								<HighlightOffRoundedIcon color='disabled' />
							</li>
						</ul>
						<span>Total price, $113</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
