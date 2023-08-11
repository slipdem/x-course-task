import { createContext, useContext, useReducer, useState } from 'react';
import { cartReducer } from '../reducers';

const BooksContext = createContext();

const BooksContextProvider = ({ children }) => {
	const [booksData, setBooksData] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [state, dispatch] = useReducer(cartReducer, { cart: [] });

	return (
		<BooksContext.Provider
			value={{
				booksData,
				setBooksData,
				cartItems,
				setCartItems,
				state,
				dispatch,
			}}>
			{children}
		</BooksContext.Provider>
	);
};

const useBooksContext = () => useContext(BooksContext);

export { BooksContext, BooksContextProvider, useBooksContext };
