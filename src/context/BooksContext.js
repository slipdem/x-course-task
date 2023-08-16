import { createContext, useContext, useReducer } from 'react';
import { booksReducer } from '../reducers/reducers';

const BooksContext = createContext();

const initialState = {
	cart: [],
	filtered: [],
	books: [],
};

const BooksContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(booksReducer, initialState);

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
