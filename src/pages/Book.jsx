import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import noImage from 'assets/images/imageNotFound.png';
import { useBooksContext } from 'context/BooksContext';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useFetch } from 'hooks/useFetch';
import { API_URL, JSON_URL, UPDATE_CART_ITEMS_QTY } from 'const';

const Book = () => {
	const { data, loading, error } = useFetch(API_URL);
	const {
		dispatch,
		state: { cart },
	} = useBooksContext();
	const { id } = useParams();
	const correctId = id - 1;

	const [countBooks, setCountBooks] = useState(1);

	const handleChange = (e) => {
		if (e.target.value < 1) {
			return setCountBooks(1);
		} else if (e.target.value > 42) {
			return setCountBooks(42);
		} else {
			return setCountBooks(e.target.value);
		}
	};

	// const getFromLocalStorage = () => {
	// 	const localData = localStorage.getItem('booksOrder');
	// 	const parsedData = localData ? JSON.parse(localData) : {};
	// 	return parsedData;
	// };

	useEffect(() => {
		localStorage.setItem('booksOrder', JSON.stringify(cart));
		// getFromLocalStorage();
	}, [cart]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	const book = data[correctId];

	return (
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
					<span className='fw700'>Price</span>
					<span>${book.price}</span>
				</li>
				<li className='book__order-count'>
					<span className='fw700'>Count</span>
					<input
						type='number'
						onChange={handleChange}
						value={countBooks}
					/>
				</li>
				<li className='book__order-total'>
					<span className='fw700'>Total price</span>
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
							dispatch({
								type: UPDATE_CART_ITEMS_QTY,
							});
						}}>
						Add to cart{<AddShoppingCartOutlinedIcon />}
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Book;
