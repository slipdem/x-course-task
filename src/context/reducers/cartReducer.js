import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	PURCHASE_PRODUCTS,
	CLEAR_CART,
	UPDATE_CART_ITEMS_QTY,
} from 'context/actionTypes';

const cartReducer = (state, { type, payload, id }) => {
	switch (type) {
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

				return {
					...state,
					cart: [...newCart],
				};
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

		// update total amount of items in cart
		case UPDATE_CART_ITEMS_QTY: {
			const amount = state.cart.reduce((a, c) => {
				return a + c.qty;
			}, 0);
			return {
				...state,
				totalBooks: amount,
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

export default cartReducer;
