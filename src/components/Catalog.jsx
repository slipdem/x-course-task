import { useEffect } from 'react';
import { Card, BooksHeader } from '.';
import { useBooksContext } from '../context/BooksContext';
const Catalog = () => {
	const {
		dispatch,
		state: { books },
	} = useBooksContext();

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

	useEffect(() => {
		dataFetch();
	}, []);

	return (
		<section className='books'>
			<BooksHeader />
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
