import React from 'react';
// import { Button } from '.';
import noImage from '../assets/images/imageNotFound.png';

const Card = ({ author, price, image, title }) => {
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
					<h5>{author}</h5>
				</div>
				<div className='card__footer'>
					<span className='card__price'>${price}</span>
					<a
						className='btn'
						href='/'>
						View
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
