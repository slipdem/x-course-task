import React, { useState } from 'react';
import { Button, Header } from '../components';
import noImage from '../assets/images/imageNotFound.png';
import { useBooksContext } from '../context/BooksContext';
import { useParams } from 'react-router-dom';

const Book = () => {
	const { booksData, setCartItems } = useBooksContext();
	const { id } = useParams();
	const correctId = id - 1;
	const book = booksData[correctId];
	const [countBooks, setCountBooks] = useState(1);
	// const [booksOrder, setBooksOrder] = useState([]); // TODO: must be an in global state
	const orderedBooks = []; // TODO: [] must be an in global state

	const {
		state: { cart },
		dispatch,
	} = useBooksContext();

	// TODO: повинно бути відфільтроване дублювання книжок в глобальному массиві orderedBooks
	// TODO: не потрібно додавати всю книгу в массив. Просто додати id книги та кількість її замовлених копій, а потім через глобальний стейт все це відображати в корзині

	const handleChange = (e) => {
		if (e.target.value < 0) {
			return setCountBooks(0);
		} else {
			return setCountBooks(e.target.value);
		}
	};

	const handleClick = () => {
		orderedBooks.push(book);
		return setCartItems(...orderedBooks);
	};

	return (
		<>
			<Header />
			<div className='container'>
				<div className='book'>
					<div className='book__info'>
						<div className='book__info-image'>
							<img
								src={book.image === '' ? noImage : book.image}
								alt={book.title}
							/>
						</div>
						<div className='book__info-meta'>
							<h2>{book.title}</h2>
							<p>{book.author}</p>
							<div className='book__description'>
								<p>{book.description}</p>
							</div>
						</div>
					</div>
					<ul className='book__order'>
						<li className='book__order-price'>
							<span>Price</span>
							<span>${book.price}</span>
						</li>
						<li className='book__order-count'>
							<span>Count</span>
							<input
								type='number'
								onChange={handleChange}
								value={countBooks}
							/>
						</li>
						<li className='book__order-total'>
							<span>Total price</span>
							<span>${(book.price * countBooks).toFixed(2)}</span>
						</li>
						<li>
							<button
								className='btn w100'
								onClick={() => {
									dispatch({
										type: 'ADD_TO_CART',
										payload: { book, qty: +countBooks },
									});
								}}>
								Add to cart
							</button>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Book;
