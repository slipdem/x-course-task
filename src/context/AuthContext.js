import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false);
	const [userName, setUserName] = useState('');

	const value = {
		isAuth,
		setIsAuth,
		userName,
		setUserName,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContext, AuthContextProvider, useAuthContext };
