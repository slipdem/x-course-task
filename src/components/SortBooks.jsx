import React from 'react';

const SortBooks = () => {
	return (
		<select
			className='books__sort-select'
			name='bookSort'
			id='selectBookSort'>
			<option value='price'>price</option>
			<option value='name'>name</option>
			<option value='author'>author</option>
			<option value='title'>title</option>
		</select>
	);
};

export default SortBooks;
