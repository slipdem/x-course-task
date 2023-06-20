import { Card, SearchBooks, SortBooks } from '.';
import data from '../assets/fake-data/books.json';
const Catalog = () => {
	return (
		<section className='books'>
			<header className='books__header'>
				<SearchBooks />
				<SortBooks />
			</header>
			<div className='books__catalog'>
				{data.books.map((book) => (
					<Card
						key={book.id}
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
