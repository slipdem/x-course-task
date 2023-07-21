import { createContext, useContext, useEffect, useState } from 'react';

const BooksContext = createContext();

const BooksContextProvider = ({ children }) => {
	const [booksData, setBooksData] = useState([]);

	const value = {
		booksData,
		setBooksData,
	};

	return (
		<BooksContext.Provider value={value}>{children}</BooksContext.Provider>
	);
};

const useBooksContext = () => useContext(BooksContext);

export { BooksContext, BooksContextProvider, useBooksContext };
