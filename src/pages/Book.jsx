import React, { useState } from 'react';
import { Button, Header } from '../components';
import noImage from '../assets/images/imageNotFound.png';
import { useBooksContext } from '../context/BooksContext';
import { useParams } from 'react-router-dom';

const Book = () => {
	const { booksData } = useBooksContext();
	const { id } = useParams();
	const correctId = id - 1;
	const book = booksData[correctId];
	const [countBooks, setCountBooks] = useState(0);

	const handleChange = (e) => {
		return setCountBooks(e.target.value);
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
								defaultValue='0'
							/>
						</li>
						<li className='book__order-total'>
							<span>Total price</span>
							<span>${book.price * countBooks}</span>
						</li>
						<li>
							<Button
								text='Add to cart'
								type='submit'
							/>
							{/* <span
								className='btn'
								onClick={() => console.log(booksData[correctId])}>
								Add to cart
							</span> */}
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Book;
