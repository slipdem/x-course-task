const REDUCER_TYPE = {
	FETCH: 'FETCH',
	FILTERED: 'FILTERED',
	ADD: 'ADD_TO_CART',
	REMOVE: 'REMOVE_FROM_CART',
	PURCHASE: 'PURCHASE_PRODUCTS',
	SHOWALL: 'SHOW_ALL_BOOKS',
	SHOWLESS15: 'SHOW_BOOKS_LESS_15',
	SHOW15TO30: 'SHOW_BOOKS_15_TO_30',
	SHOWUP30: 'SHOW_BOOKS_UP_30',
	SEARCH: 'SEARCH_BOOK',
};

export const booksReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		// get books
		case REDUCER_TYPE.FETCH:
			return { ...state, books: { ...payload } };
		case REDUCER_TYPE.FILTERED:
			return { ...state, filtered: { ...payload } };
		// cart
		case REDUCER_TYPE.ADD:
			return {
				...state,
				cart: [...state.cart, { ...payload }],
			};

		// filters
		case REDUCER_TYPE.SHOWALL:
			// return state;
			return { ...state, filtered: { ...state.books.data } };
		case REDUCER_TYPE.SHOWLESS15: {
			const less15 = state.books.data.filter((book) => book.price < 15);
			return { ...state, filtered: { ...less15 } };
		}
		case REDUCER_TYPE.SHOW15TO30: {
			const show15to30 = state.books.data.filter(
				(book) => book.price >= 15 && book.price < 30,
			);
			return { ...state, filtered: { ...show15to30 } };
		}
		case REDUCER_TYPE.SHOWUP30:
			const up30 = state.books.data.filter((book) => book.price >= 30);
			return { ...state, filtered: { ...up30 } };

		// search
		case REDUCER_TYPE.SEARCH_BOOK:
			return { ...state };

		// buy books
		case REDUCER_TYPE.PURCHASE:
			return (
				localStorage.removeItem('booksOrder'),
				{
					...state,
					cart: [],
				}
			);

		default:
			return state;
	}
};
