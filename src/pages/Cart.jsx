import React, { useEffect, useState } from 'react';
import cartImage from '../assets/images/cart.svg';
import { Header, Footer } from '../components';
import { useBooksContext } from '../context/BooksContext';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

const Cart = () => {
	const [totalPrice, setTotalPrice] = useState(0);

	const {
		state: { cart },
		dispatch,
	} = useBooksContext();

	const handleTotalPrice = () => {
		try {
			let itemTotalPrice = cart.map((item) => {
				return item.book.price * item.qty;
			});

			let finalCartPrice = itemTotalPrice.reduce((acc, item) => {
				return acc + item;
			});
			setTotalPrice(finalCartPrice);
		} catch {
			console.error('Cart is empty');
		}
	};

	useEffect(() => {
		handleTotalPrice();
	}, []);

	return (
		<>
			<Header />
			<div className='container'>
				<div className='purchase'>
					<button
						className='btn'
						disabled={cart.length === 0 ? true : false}
						onClick={() => {
							dispatch({ type: 'PURCHASE_PRODUCTS' });
						}}>
						<span>Purchase</span>
						<AttachMoneyOutlinedIcon />
					</button>
				</div>
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
							<p className='cart__total-price'>
								Total price: ${totalPrice.toFixed(2)}
							</p>
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
			<Footer />
		</>
	);
};

export default Cart;
