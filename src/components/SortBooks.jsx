import React from 'react';

const SortBooks = () => {
	return (
		<select
			className='books__sort-select'
			name='bookSort'
			id='selectBookSort'>
			<option value='all'>all</option>
			<option value='less 15'>0 to 15</option>
			<option value='less 30'>15 to 30</option>
			<option value='more 30'>+30</option>
		</select>
	);
};

export default SortBooks;
