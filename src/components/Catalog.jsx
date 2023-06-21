import { Card, BooksHeader } from '.';
import data from '../assets/fake-data/books.json';
const Catalog = () => {
	// let finalData = {};

	// const arrRes = async ()=>{
	// let res = await fetch('https://jsonplaceholder.typicode.com/posts/');
	// let res = await fetch('../assets/fake-data/books.json');
	// let sRes = await res.json();
	// let init = await sRes;
	// console.log(init)
	// return init
	// }
	// finalData = arrRes();

	return (
		<section className='books'>
			<BooksHeader />
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
