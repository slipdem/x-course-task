import React from 'react';
import { Button, Header } from '../components';
import noImage from '../assets/images/imageNotFound.png';
import { useBooksContext } from '../context/BooksContext';
import { useParams } from 'react-router-dom';

const Book = () => {
	const { booksData } = useBooksContext();
	const { id } = useParams();
	const correctId = id - 1;
	const book = booksData[correctId];
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
							<p>Book level</p>
							<p>Book tags</p>
						</div>
					</div>
					<div className='book__order'>
						<div className='book__order-price'>
							<span>Price, $</span>
							<span>{book.price}</span>
						</div>
						<div className='book__order-count'>
							<span>Count</span>
							<input type='number' />
						</div>
						<div className='book__order-total'>
							<span>Total price</span>
							<span>51</span>
						</div>
						<Button text='Add to cart' />
					</div>
				</div>
				<div className='book__description'>
					<p>{book.description}</p>
				</div>
			</div>
		</>
	);
};

export default Book;
