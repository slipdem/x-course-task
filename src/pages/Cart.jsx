import React, { useEffect, useState } from 'react';
import cartImage from '../assets/images/cart.svg';
import { useBooksContext } from '../context/BooksContext';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
	CLEAR_CART,
	PURCHASE_PRODUCTS,
	REMOVE_FROM_CART,
	UPDATE_CART_ITEMS_QTY,
} from '../context/actionTypes';

const Cart = () => {
	const [totalPrice, setTotalPrice] = useState(0);

	const {
		state: { cartState },
		dispatch,
	} = useBooksContext();

	const isCartEmpty = cartState.cart.length !== 0;

	useEffect(() => {
		let itemTotalPrice = cartState.cart?.map((item) => {
			return item.book.price * item.qty;
		});

		let finalCartPrice = itemTotalPrice.reduce((acc, item) => {
			return acc + item;
		}, 0);
		setTotalPrice(finalCartPrice);
	}, [cartState]);

	return (
		<>
			<div className='cart'>
				{isCartEmpty ? (
					<table className='cart__table'>
						<thead className='cart__table-head'>
							<tr>
								<th>Author</th>
								<th>Title</th>
								<th>Qty</th>
								<th>Price</th>
								<th>Total Price</th>
								<th></th>
							</tr>
						</thead>
						<tbody className='cart__table-body'>
							{cartState.cart?.map((item) => (
								<tr key={item.book.id}>
									<td className='cart__book-author'>{item.book.author}</td>
									<td className='cart__book-title'>{item.book.title}</td>
									<td className='cart__book-qty'>{item.qty}</td>
									<td className='cart__book-price'>$ {item.book.price}</td>
									<td className='cart__book-sum'>
										$ {(item.book.price * item.qty).toFixed(2)}
									</td>
									<td className='cart__book-remove'>
										<span
											className='cart__book-remove-container'
											onClick={() => {
												dispatch({
													type: REMOVE_FROM_CART,
													id: item.book.id,
												});
												dispatch({
													type: UPDATE_CART_ITEMS_QTY,
												});
											}}>
											<CloseOutlinedIcon />
										</span>
									</td>
								</tr>
							))}
						</tbody>
						<tfoot className='cart__table-footer'>
							<tr>
								<td
									colSpan='6'
									className='cart__total-price'>
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
					disabled={isCartEmpty ? false : true}
					onClick={() => {
						dispatch({ type: CLEAR_CART });
					}}>
					<span>Clear cart</span>
					<DeleteForeverOutlinedIcon />
				</button>
				<button
					className='btn'
					disabled={isCartEmpty ? false : true}
					onClick={() => {
						dispatch({ type: PURCHASE_PRODUCTS });
					}}>
					<span>Purchase</span>
					<AttachMoneyOutlinedIcon />
				</button>
			</div>
		</>
	);
};

export default Cart;
