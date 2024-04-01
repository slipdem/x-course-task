import {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useState,
} from 'react';
import { booksReducer } from './reducers/reducers';

const BooksContext = createContext();

const initialState = {
	cart: [],
	filtered: [],
	books: [],
	totalBooks: 0,
};

const BooksContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(booksReducer, initialState);
	const [cartItemsAmount, setCartItemsAmount] = useState(0);

	// total items in cart
	useEffect(() => {
		if (state.cart.length !== 0) {
			const amount = state.cart.reduce((a, c) => {
				return a + c.qty;
			}, 0);
			// return { ...state, totalBooks: amount };
			setCartItemsAmount(amount);
			state.totalBooks = amount;
		}
	}, [state.cart]);

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
