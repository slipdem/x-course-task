import { SearchBooks, SortBooks } from '.';

const BooksHeader = () => {
	return (
		<div className='books__header'>
			<SearchBooks />
			<SortBooks />
		</div>
	);
};

export default BooksHeader;
