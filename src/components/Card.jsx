import React from 'react';
import noImage from '../assets/images/imageNotFound.png';
import { Link } from 'react-router-dom';

const Card = ({ author, price, image, title, id }) => {
	return (
		<div className='card'>
			<div className='card__image'>
				<img
					src={image ? image : noImage}
					alt='book'
				/>
			</div>

			<div className='card__content'>
				<div className='card__body'>
					<h3>{title}</h3>
					<p>{author}</p>
				</div>
				<div className='card__footer'>
					<span className='card__price'>${price}</span>
					<Link
						className='btn'
						to={`/books/${id}`}>
						View
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Card;
