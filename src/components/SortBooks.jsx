import React from 'react';
import { useBooksContext } from '../context/BooksContext';

const SortBooks = () => {
	const { booksData, setBooksData } = useBooksContext();

	const handleChange = (event) => {
		if (event === 'all') {
			return console.log(booksData);
		} else if (event === 'less15') {
			return console.log(booksData.filter((book) => book.price < 15));
		} else if (event === '15to30') {
			return console.log(booksData.filter((book) => book.price >= 15 && book.price < 30));
		} else if (event === 'more30') {
			return console.log(booksData.filter((book) => book.price >= 30));
		}
		return booksData;
	};

	return (
		<select
			className='books__sort-select'
			name='bookSort'
			id='selectBooksSort'
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
