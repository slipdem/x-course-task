import { AppRouter } from './components';
import { AuthContextProvider } from './context/AuthContext';

function App() {
	return (
		<main className='App'>
			<AuthContextProvider>
				<AppRouter />
			</AuthContextProvider>
		</main>
	);
}

export default App;
