import { useEffect, useState } from 'react';
import { Card, BooksHeader } from '.';
const Catalog = () => {
	const [booksData, setBooksData] = useState();

	useEffect(() => {
		fetch('../assets/fake-data/books.json')
			.then((response) => response.json())
			.then((data) => {
				setBooksData(data.books);
			});
	}, []);

	return (
		<section className='books'>
			<BooksHeader />
			<div className='books__catalog'>
				{booksData ? (
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
				) : (
					<h2>No data</h2>
				)}
			</div>
		</section>
	);
};

export default Catalog;
