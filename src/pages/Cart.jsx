import React from 'react';
// import cartImage from '../assets/images/cart.svg';
import { Button, Header } from '../components';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useBooksContext } from '../context/BooksContext';

const Cart = () => {
	const {
		state: { cart },
	} = useBooksContext();

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
							{cart.map((item) => (
								<li key={item.book.id}>
									<p>ID: {item.book.id}</p>
									<p>Auth: {item.book.author}</p>
									<p>Title: {item.book.title}</p>
									<p>Price: ${item.book.price}</p>
									<p>Qty: {item.qty}</p>
									<p>Sum: ${(item.book.price * item.qty).toFixed(2)}</p>
									{/* <HighlightOffRoundedIcon color='primary' /> */}
								</li>
							))}
						</ul>
						<span>Total price, $113</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
