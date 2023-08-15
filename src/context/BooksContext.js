import { createContext, useContext, useReducer, useState } from 'react';
import { cartReducer } from '../reducers';

const BooksContext = createContext();

const BooksContextProvider = ({ children }) => {
	const [booksData, setBooksData] = useState([]);
	const [state, dispatch] = useReducer(cartReducer, { cart: [] });

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
