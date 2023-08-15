import React, { useEffect, useState } from 'react';
import { Footer, Header } from '../components';
import noImage from '../assets/images/imageNotFound.png';
import { useBooksContext } from '../context/BooksContext';
import { useParams } from 'react-router-dom';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

const Book = () => {
	const {
		booksData,
		dispatch,
		state: { cart },
	} = useBooksContext();
	const { id } = useParams();
	const correctId = id - 1;
	const book = booksData[correctId];
	const [countBooks, setCountBooks] = useState(1);

	// TODO: повинно бути відфільтроване дублювання книжок в глобальному массиві orderedBooks
	// TODO: не потрібно додавати всю книгу в массив. Просто додати id книги та кількість її замовлених копій, а потім через глобальний стейт все це відображати в корзині

	const handleChange = (e) => {
		if (e.target.value < 1) {
			return setCountBooks(1);
		} else if (e.target.value > 42) {
			return setCountBooks(42);
		} else {
			return setCountBooks(e.target.value);
		}
	};

	const getFromLocalStorage = () => {
		const data = localStorage.getItem('booksOrder');
		const parsedData = data ? JSON.parse(data) : {};
		return console.log(parsedData);
	};

	useEffect(() => {
		localStorage.setItem('booksOrder', JSON.stringify(cart));
		getFromLocalStorage();
	}, [cart]);

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
								}}>
								Add to cart{<AddShoppingCartOutlinedIcon />}
							</button>
						</li>
					</ul>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Book;
