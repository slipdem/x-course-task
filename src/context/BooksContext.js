import { createContext, useContext, useEffect, useState } from 'react';

const BooksContext = createContext(1);

const BooksContextProvider = ({ children }) => {
	const [booksData, setBooksData] = useState({});

	const value = {
		booksData,
		setBooksData,
	};

	useEffect(() => {
		fetch('../assets/fake-data/books.json')
			.then((response) => response.json())
			.then((data) => {
				setBooksData(data.books);
			});
	});

	return (
		<BooksContext.Provider value={value}>{children}</BooksContext.Provider>
	);
};

const useBooksContext = () => useContext(BooksContext);

export { BooksContext, BooksContextProvider, useBooksContext };
