import { createContext, useContext, useReducer } from 'react';
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

	const value = {
		state,
		dispatch,
	};
	return (
		<BooksContext.Provider value={value}>{children}</BooksContext.Provider>
	);
};

const useBooksContext = () => useContext(BooksContext);

export { BooksContext, BooksContextProvider, useBooksContext };
