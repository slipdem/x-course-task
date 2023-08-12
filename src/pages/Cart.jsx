import React, { useEffect, useState } from 'react';
import cartImage from '../assets/images/cart.svg';
import { Button, Header, Footer } from '../components';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useBooksContext } from '../context/BooksContext';

const Cart = () => {
	const [totalPrice, setTotalPrice] = useState(0);

	const {
		state: { cart },
	} = useBooksContext();

	console.log('cart:', cart);

	const handleTotalPrice = () => {
		try {
			cart.reduce((a, b) => {
				return console.log('reduce', a, b.book);
			});
		} catch {
			console.error('Cart is empty');
		}
	};

	useEffect(() => {
		handleTotalPrice();
	}, [cart]);

	return (
		<>
			<Header />
			<div className='container'>
				<Button text='Purchase' />
				<div className='cart'>
					{cart.length !== 0 ? (
						<div className='cart__items'>
							<ul className='cart__list'>
								{cart.map((item) => (
									<li
										className='cart__list-item'
										key={item.book.id}>
										<div className='cart__product-info'>
											<span>
												{item.book.author} - {item.book.title},
											</span>
											<span>
												{item.qty} x ${item.book.price}
											</span>
										</div>
										<p className='cart__product-price'>
											Total price: ${(item.book.price * item.qty).toFixed(2)}
										</p>
									</li>
								))}
							</ul>
							<p className='cart__total-price'>Total price, $113</p>
						</div>
					) : (
						<div className='cart__items'>
							<ul className='cart__list'>
								<li className='cart__list-item cart__empty'>
									<img
										className='cart__empty-img'
										src={cartImage}
										alt='Empty cart'
									/>
									<span className='cart__empty-text'>Cart is empty...</span>
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
			{/* <HighlightOffRoundedIcon color='primary' /> */}
			<Footer />
		</>
	);
};

export default Cart;
