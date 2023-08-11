import { useEffect } from 'react';
import { Card, BooksHeader } from '.';
import { useBooksContext } from '../context/BooksContext';
const Catalog = () => {
	const { booksData, setBooksData } = useBooksContext();

	const dataFetch = async () => {
		try {
			const data = await (await fetch('../assets/fake-data/books.json')).json();
			setBooksData(data.books);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		dataFetch();
	}, []);

	return (
		<section className='books'>
			<BooksHeader />
			<div className='books__catalog'>
				{booksData === undefined ? (
					<h2>Loading data ...</h2>
				) : (
					booksData.map((book) => (
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
