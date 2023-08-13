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
			return {
				...state,
				cart: [],
			};
		default:
			return state;
	}
};

// export const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
//     case "REMOVE_FROM_CART":
//       return {
//         ...state,
//         cart: state.cart.filter((c) => c.id !== action.payload.id),
//       };
//     case "CHANGE_CART_QTY":
//       return {
//         ...state,
//         cart: state.cart.filter((c) =>
//           c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
//         ),
//       };
//     default:
//       return state;
//   }
// };
