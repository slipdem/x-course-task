import { useState } from 'react';
import { AppRouter } from './components';
import { AuthContext } from './context/AuthContext';

function App() {
	const [isAuth, setIsAuth] = useState(true);
	return (
		<main className='App'>
			<AuthContext.Provider value={{ isAuth: isAuth }}>
				<AppRouter />
			</AuthContext.Provider>
		</main>
	);
}

export default App;
