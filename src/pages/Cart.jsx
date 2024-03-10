import React, { useEffect, useState } from 'react';
import cartImage from '../assets/images/cart.svg';
import { Header, Footer } from '../components';
import { useBooksContext } from '../context/BooksContext';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

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
				<div className='cart'>
					{cart.length !== 0 ? (
						<table className='cart__table'>
							<thead className='cart__table-head'>
								<tr>
									<th>Author</th>
									<th>Title</th>
									<th>Qty</th>
									<th>Price</th>
									<th>Total Price</th>
								</tr>
							</thead>
							<tbody className='cart__table-body'>
								{cart.map((item) => (
									<tr key={item.book.id}>
										<td className='cart__book-author'>{item.book.author}</td>
										<td className='cart__book-title'>{item.book.title}</td>
										<td className='cart__book-qty'>{item.qty}</td>
										<td className='cart__book-price'>$ {item.book.price}</td>
										<td className='cart__book-sum'>
											$ {(item.book.price * item.qty).toFixed(2)}
										</td>
									</tr>
								))}
							</tbody>
							<tfoot className='cart__table-footer'>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td className='cart__total-price'>
										Total price: $ {totalPrice.toFixed(2)}
									</td>
								</tr>
							</tfoot>
						</table>
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
				<div className='purchase'>
					<button
						className='btn'
						disabled={cart.length === 0 ? true : false}
						onClick={() => {
							dispatch({ type: 'PURCHASE_PRODUCTS' });
						}}>
						<span>Clear cart</span>
						<DeleteForeverOutlinedIcon />
					</button>
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
			</div>
			<Footer />
		</>
	);
};

export default Cart;
