import {
	ADD_TO_CART,
	CLEAR_CART,
	FETCH_DATA,
	FILTER_DATA,
	PURCHASE_PRODUCTS,
	REMOVE_FROM_CART,
	SEARCH_BOOK,
	SHOW_ALL_BOOKS,
	SHOW_BOOKS_15_TO_30,
	SHOW_BOOKS_LESS_15,
	SHOW_BOOKS_UP_30,
} from '../actionTypes';

export const booksReducer = (state, action) => {
	const { type, id, payload } = action;

	switch (type) {
		// GET BOOKS
		case FETCH_DATA: {
			return { ...state, books: { ...payload } };
		}
		case FILTER_DATA: {
			return { ...state, filtered: { ...payload } };
		}

		// CART

		// add item to cart
		case ADD_TO_CART: {
			// check if item is already in the cart
			const checkCartItem = state.cart.find((item) => {
				return item.book.id === payload.book.id;
			});

			if (checkCartItem) {
				const newCart = state.cart.map((item) => {
					if (item.book.id === payload.book.id) {
						return { ...item, qty: item.qty + payload.qty };
					} else {
						return item;
					}
				});
				return { ...state, cart: [...newCart] };
			} else
				return {
					...state,
					cart: [...state.cart, { ...payload }],
				};
		}

		// remove item from cart
		case REMOVE_FROM_CART: {
			const newCart = state.cart.filter((item) => {
				return item.book.id !== id;
			});
			return {
				...state,
				cart: [...newCart],
			};
		}

		// remove all items from cart
		case CLEAR_CART: {
			return {
				...state,
				cart: [],
				totalBooks: 0,
			};
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

		// BUY BOOKS
		case PURCHASE_PRODUCTS: {
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
