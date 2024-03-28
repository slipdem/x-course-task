const REDUCER_TYPE = {
	FETCH: 'FETCH',
	FILTERED: 'FILTERED',
	ADD: 'ADD_TO_CART',
	REMOVE: 'REMOVE_FROM_CART',
	CLEAR: 'CLEAR_CART',
	PURCHASE: 'PURCHASE_PRODUCTS',
	SHOWALL: 'SHOW_ALL_BOOKS',
	SHOWLESS15: 'SHOW_BOOKS_LESS_15',
	SHOW15TO30: 'SHOW_BOOKS_15_TO_30',
	SHOWUP30: 'SHOW_BOOKS_UP_30',
	SEARCH: 'SEARCH_BOOK',
};

export const booksReducer = (state, action) => {
	const { type, id, payload } = action;

	switch (type) {
		// GET BOOKS
		case REDUCER_TYPE.FETCH: {
			return { ...state, books: { ...payload } };
		}
		case REDUCER_TYPE.FILTERED: {
			return { ...state, filtered: { ...payload } };
		}

		// CART

		// add item to cart
		case REDUCER_TYPE.ADD: {
			// check if item is already in the cart
			const checkCartItem = state.cart.find((item) => {
				return item.book.id === payload.book.id;
			});
			// const amount = state.cart.reduce((a, c) => {
			// 	return a + c.qty;
			// }, 0);

			if (checkCartItem) {
				const newCart = state.cart.map((item) => {
					if (item.book.id === payload.book.id) {
						return { ...item, qty: item.qty + payload.qty };
					} else {
						return item;
					}
				});
				// return { ...state, cart: [...newCart], totalBooks: amount };
				return { ...state, cart: [...newCart] };
			} else
				return {
					...state,
					cart: [...state.cart, { ...payload }],
				};
		}

		// remove item from cart
		case REDUCER_TYPE.REMOVE: {
			const newCart = state.cart.filter((item) => {
				return item.book.id !== id;
			});
			return {
				...state,
				cart: [...newCart],
			};
		}

		// remove all items from cart
		case REDUCER_TYPE.CLEAR: {
			return {
				...state,
				cart: [],
				totalBooks: 0,
			};
		}

		// FILTERS
		case REDUCER_TYPE.SHOWALL: {
			return { ...state, filtered: { ...state.books.data } };
		}
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
		case REDUCER_TYPE.SHOWUP30: {
			const up30 = state.books.data.filter((book) => book.price >= 30);
			return { ...state, filtered: { ...up30 } };
		}

		// SEARCH
		case REDUCER_TYPE.SEARCH_BOOK: {
			return { ...state };
		}

		// BUY BOOKS
		case REDUCER_TYPE.PURCHASE: {
			return (
				localStorage.removeItem('booksOrder'),
				{
					...state,
					cart: [],
					totalBooks: 0,
				}
			);
		}

		default:
			return state;
	}
};
