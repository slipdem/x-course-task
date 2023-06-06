import React from 'react';
import book from '../assets/books/angular_up_and_running.jpg';
import { Button } from '.';

const Card = () => {
	return (
		<div className='card'>
			<div className='card__image'>
				<img
					src={book}
					alt='book'
				/>
			</div>
			<div className='card__body'>
				<h4>Book title can be pretty long</h4>
				<h5>Book Author</h5>
			</div>
			<div className='card__footer'>
				<span className='card__price'>Price</span>
				<a className='btn' href="/">View</a>
			</div>
		</div>
	);
};

export default Card;
