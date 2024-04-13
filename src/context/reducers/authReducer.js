import { LOGIN_USER, LOGOUT_USER } from 'context/actionTypes';

const authReducer = (state, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return console.log('login');
		case LOGOUT_USER:
			return console.log('log out');

		default:
			return state;
	}
};

export default authReducer;
