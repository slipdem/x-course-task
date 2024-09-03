import { FETCH_DATA, FETCH_ERROR, FETCH_SUCCESS, SHOW_ALL_BOOKS, SHOW_BOOKS_15_TO_30, SHOW_BOOKS_LESS_15, SHOW_BOOKS_UP_30 } from 'const';

const fetchDataReducer = (state, action) => {
	switch (action.type) {
		// FETCH DATA
		case FETCH_DATA:
			return console.log('fetch data');
		case FETCH_SUCCESS:
			return console.log('fetch success');
		case FETCH_ERROR:
			return console.log('fetch error');

		// FILTER DATA
		case SHOW_ALL_BOOKS:
			return console.log('SHOW_ALL_BOOKS');
		case SHOW_BOOKS_LESS_15:
			return console.log('SHOW_BOOKS_LESS_15');
		case SHOW_BOOKS_15_TO_30:
			return console.log('SHOW_BOOKS_15_TO_30');
		case SHOW_BOOKS_UP_30:
			return console.log('SHOW_BOOKS_UP_30');

		default:
			return state;
	}
};

export default fetchDataReducer;
