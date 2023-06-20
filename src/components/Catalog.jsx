import React from 'react';
import { Card, SearchBooks, SortBooks } from '.';
import booksData from '../assets/fake-data/books.json';
const Catalog = () => {
	return (
		<section className='books'>
			<header className='books__header'>
				<SearchBooks />
				<SortBooks />
			</header>
			<div className='books__catalog'>
				{console.log(booksData)}
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
