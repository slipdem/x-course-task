const REDUCER_TYPE = {
	ADD: 'ADD_TO_CART',
	REMOVE: 'REMOVE_FROM_CART',
	PURCHASE: 'PURCHASE_PRODUCTS',
};

export const cartReducer = (state, action) => {
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
