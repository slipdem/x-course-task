import React from 'react';
import noImage from '../assets/images/imageNotFound.png';
import { Link } from 'react-router-dom';
import { useBooksContext } from '../context/BooksContext';

const Card = ({ book, author, price, image, title, id }) => {
	const { dispatch } = useBooksContext();
	return (
		<div className='card'>
			<Link to={`/books/${id}`}>
				<div className='card__image'>
					<img
						src={image ? image : noImage}
						alt='book'
					/>
				</div>
			</Link>
			<div className='card__content'>
				<div className='card__body'>
					<h3 className='h3'>
						{title.length > 24 ? title.slice(0, 24) + '...' : title}
					</h3>
					<p>{author}</p>
				</div>
				<div className='card__footer'>
					<span className='card__price'>${price}</span>
					<button
						className='btn'
						onClick={() => {
							dispatch({
								type: 'ADD_TO_CART',
								payload: { book, qty: 1 },
							});
						}}>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
