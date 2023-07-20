import { AppRouter } from './components';
import { BooksContextProvider } from './context/BooksContext';

function App() {
	return (
		<main className='App'>
			<BooksContextProvider>
				<AppRouter />
			</BooksContextProvider>
		</main>
	);
}

export default App;
