import React from 'react';

const SearchBook = () => {
	return (
		<input
			className='books__search'
			type='search'
			name='search'
			id='bookSearch'
			placeholder='Search book by name'
		/>
	);
};

export default SearchBook;
