import React from 'react';
import { useBooksContext } from '../context/BooksContext';

const SortBooks = () => {
	const { booksData } = useBooksContext();

	const handleChange = (evnt) => {
		if (evnt === 'all') {
			return booksData;
		} else if (evnt === 'less15') {
			return booksData.filter((book) => book.price < 15);
		} else if (evnt === '15to30') {
			return booksData.filter((book) => book.price >= 15 && book.price < 30);
		} else if (evnt === 'more30') {
			return booksData.filter((book) => book.price >= 30);
		}
		return booksData;
	};

	return (
		<select
			className='books__sort-select'
			name='bookSort'
			id='selectBookSort'
			defaultValue='all'
			onChange={(e) => handleChange(e.target.value)}>
			<option value='all'>all</option>
			<option value='less15'>0 to 15</option>
			<option value='15to30'>15 to 30</option>
			<option value='more30'>+30</option>
		</select>
	);
};

export default SortBooks;
