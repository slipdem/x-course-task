import { useEffect, useState } from 'react';
import { Card } from '.';
import { useBooksContext } from '../context/BooksContext';

const Catalog = () => {
	const { dispatch } = useBooksContext();

	const [catalog, setCatalog] = useState([]);
	const [filteredCatalog, setFilteredCatalog] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const dataFetch = async () => {
		try {
			const getData = await (
				await fetch(
					'https://slipdem.github.io/x-course-task/assets/fake-data/books.json',
				)
			)
				// await fetch('../assets/fake-data/books.json')
				.json();
			const resultData = getData.books;

			setCatalog(resultData);
			setFilteredCatalog(resultData);
			dispatch({
				type: 'FETCH',
				payload: { data: resultData },
			});
		} catch (error) {
			console.error('Error in data fetch: ', error);
		}
	};

	const handleChange = (event) => {
		if (event === 'all') {
			return dataFetch();
		} else if (event === 'less15') {
			return setCatalog(filteredCatalog.filter((book) => book.price < 15));
		} else if (event === '15to30') {
			return setCatalog(
				filteredCatalog.filter((book) => book.price >= 15 && book.price < 30),
			);
		} else if (event === 'more30') {
			return setCatalog(filteredCatalog.filter((book) => book.price >= 30));
		}
	};

	useEffect(() => {
		dataFetch();
	}, []);

	useEffect(() => {
		const searchResult = filteredCatalog.filter((item) =>
			item.title.toLowerCase().includes(searchValue),
		);
		setCatalog(searchResult);
	}, [searchValue]);

	return (
		<section className='books'>
			<div className='books__header'>
				<input
					className='books__search'
					type='search'
					name='search'
					id='bookSearch'
					placeholder='Search book by name'
					onChange={(e) => setSearchValue(e.target.value)}
					value={searchValue}
				/>
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
			</div>
			<div className='books__catalog'>
				{catalog.map((book) => (
					<Card
						key={book.id}
						id={book.id}
						author={book.author}
						price={book.price}
						image={book.image}
						title={book.title}
					/>
				))}
			</div>
		</section>
	);
};

export default Catalog;
