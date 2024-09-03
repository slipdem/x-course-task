import {
	FETCH_DATA,
	FILTER_DATA,
	PURCHASE_PRODUCTS,
	SEARCH_BOOK,
	SHOW_ALL_BOOKS,
	SHOW_BOOKS_15_TO_30,
	SHOW_BOOKS_LESS_15,
	SHOW_BOOKS_UP_30,
} from 'const';

export const booksReducer = (state, action) => {
	const { type,  payload } = action;

	switch (type) {
		// GET BOOKS
		case FETCH_DATA: {
			return { ...state, books: { ...payload } };
		}
		case FILTER_DATA: {
			return { ...state, filtered: { ...payload } };
		}

		// FILTERS
		case SHOW_ALL_BOOKS: {
			return { ...state, filtered: { ...state.books.data } };
		}
		case SHOW_BOOKS_LESS_15: {
			const less15 = state.books.data.filter((book) => book.price < 15);
			return { ...state, filtered: { ...less15 } };
		}
		case SHOW_BOOKS_15_TO_30: {
			const show15to30 = state.books.data.filter(
				(book) => book.price >= 15 && book.price < 30,
			);
			return { ...state, filtered: { ...show15to30 } };
		}
		case SHOW_BOOKS_UP_30: {
			const up30 = state.books.data.filter((book) => book.price >= 30);
			return { ...state, filtered: { ...up30 } };
		}

		// SEARCH
		case SEARCH_BOOK: {
			return { ...state };
		}



		default:
			return state;
	}
};
