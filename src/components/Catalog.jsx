import { useEffect } from 'react';
import { Card, BooksHeader } from '.';
import { useBooksContext } from '../context/BooksContext';
const Catalog = () => {
	const {
		dispatch,
		state: { books },
	} = useBooksContext();

	useEffect(() => {
		const dataFetch = async () => {
			try {
				const getData = await (
					await fetch('../assets/fake-data/books.json')
				).json();

				dispatch({ type: 'FETCH', payload: { data: getData.books } });
			} catch (error) {
				console.error('Error in data fetch', error);
			}
		};
		dataFetch();
	}, []);

	return (
		<section className='books'>
			<div className='books__header'>
				<input
					className='books__search'
					type='search'
					name='search'
					id='bookSearch'
					placeholder='Search book by name'
				/>
				<select
					className='books__sort-select'
					name='bookSort'
					id='selectBooksSort'
					defaultValue='all'
					// onChange={(e) => handleChange(e.target.value)}
				>
					<option value='all'>all</option>
					<option value='less15'>0 to 15</option>
					<option value='15to30'>15 to 30</option>
					<option value='more30'>+30</option>
				</select>
			</div>
			<div className='books__catalog'>
				{books.data === undefined ? (
					<h2>Loading data...</h2>
				) : (
					books.data.map((book) => (
						<Card
							key={book.id}
							id={book.id}
							author={book.author}
							price={book.price}
							image={book.image}
							title={book.title}
						/>
					))
				)}
			</div>
		</section>
	);
};

export default Catalog;
