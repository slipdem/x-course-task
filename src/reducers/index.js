const REDUCER_TYPE = {
	ADD: 'ADD_TO_CART',
	REMOVE: 'REMOVE_FROM_CART',
	PURCHASE: 'PURCHASE_PRODUCTS',
	SORTALL: 'SORT_ALL_BOOKS',
	SORTLESS15: 'SORT_BOOKS_LESS_15',
	SORT15TO30: 'SORT_BOOKS_15_TO_30',
	SORTUP30: 'SORT_BOOKS_UP_30',
};

export const cartReducer = (state, action) => {
	console.log('cartReducer state: ', state.cart);
	switch (action.type) {
		case REDUCER_TYPE.ADD:
			return {
				...state,
				cart: [...state.cart, { ...action.payload }],
			};
		case REDUCER_TYPE.REMOVE:
			return {
				...state,
				cart: state.cart.filter((c) => c.id !== action.payload.id),
			};
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

// export const booksSortReducer = (state, action) => {
// 	console.log(state);
// 	switch (action.type) {
// 		case REDUCER_TYPE.SORTALL:
// 			return console.log(state);
// 		case REDUCER_TYPE.SORTLESS15:
// 			return state.filter((book) => book.price < 15);
// 		case REDUCER_TYPE.SORT15TO30:
// 			return state.filter((book) => book.price >= 15 && book.price < 30);
// 		case REDUCER_TYPE.SORTUP30:
// 			return state.filter((book) => book.price > 30);
// 		default:
// 			return state;
// 	}
// };
