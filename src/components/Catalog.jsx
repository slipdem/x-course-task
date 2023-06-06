import React from 'react';
import { Card, SearchBooks, SortBooks } from '.';

const Catalog = () => {
	return (
		<section className='books'>
			<header className='books__header'>
				<SearchBooks />
				<SortBooks />
			</header>
			<div className='books__catalog'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</section>
	);
};

export default Catalog;
