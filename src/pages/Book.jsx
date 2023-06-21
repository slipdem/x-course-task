import React from 'react';
import { Button, Header } from '../components';
import noImage from '../assets/images/imageNotFound.png';

const Book = ({ author, price, image, title }) => {
	return (
		<>
			<Header />
			<div className='container'>
				<div className='book'>
					<div className='book__info'>
						<div className='book__info-image'>
							<img
								src={noImage}
								alt='1'
							/>
						</div>
						<div className='book__info-meta'>
							<h2>Book name</h2>
							<p>Book author</p>
							<p>Book level</p>
							<p>Book tags</p>
						</div>
					</div>
					<div className='book__order'>
						<div className='book__order-price'>
							<span>Price, $</span>
							<span>17</span>
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
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
						autem eum nobis perferendis praesentium, quibusdam porro excepturi.
						Maxime, provident obcaecati molestias voluptatem porro dolore omnis
						praesentium libero! Non, dolore impedit?
					</p>
				</div>
			</div>
		</>
	);
};

export default Book;
