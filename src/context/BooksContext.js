import {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useState,
} from 'react';
import { booksReducer } from './reducers/reducers';
import authReducer from './reducers/authReducer';
import cartReducer from './reducers/cartReducer';
import fetchDataReducer from './reducers/fetchDataReducer';

const BooksContext = createContext();

const initialState = {
	userState: {
		user: null,
		isLoggedIn: false,
	},

	dataState: {
		data: [],
		filteredData: [],
		loading: false,
		error: null,
	},

	cartState: {
		cart: [],
		totalBooks: 0,
	},

	filtered: [],
	books: [],
};

const rootReducer = ({ userState, dataState, cartState }, action) => ({
	userState: booksReducer(userState, action),
	dataState: booksReducer(dataState, action),
	cartState: cartReducer(cartState, action),
});

const BooksContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(rootReducer, initialState);
	const [cartItemsAmount, setCartItemsAmount] = useState(0);

	// total items in cart
	// useEffect(() => {
	// 	if (state.cart.length !== 0) {
	// 		const amount = state.cart.reduce((a, c) => {
	// 			return a + c.qty;
	// 		}, 0);
	// 		setCartItemsAmount(amount);
	// 		state.totalBooks = amount;
	// 	}
	// }, [state.cartState.cart]);

	const value = {
		state,
		dispatch,
		cartItemsAmount,
	};
	return (
		<BooksContext.Provider value={value}>{children}</BooksContext.Provider>
	);
};

const useBooksContext = () => useContext(BooksContext);

export { BooksContext, BooksContextProvider, useBooksContext };
