import { createContext, useContext, useReducer, useState } from 'react';
import { booksReducer } from '../reducers/reducers';

const BooksContext = createContext();

const initialState = {
	cart: [],
	filtered: [],
	books: []
};

const BooksContextProvider = ({ children }) => {
	const [booksData, setBooksData] = useState([]);
	const [state, dispatch] = useReducer(booksReducer, initialState);

	const value = {
		booksData,
		setBooksData,
		state,
		dispatch,
	};

	return (
		<BooksContext.Provider value={value}>{children}</BooksContext.Provider>
	);
};

const useBooksContext = () => useContext(BooksContext);

export { BooksContext, BooksContextProvider, useBooksContext };
