import { AppRouter } from './components';
import { BooksContextProvider } from './context/BooksContext';

function App() {
	return (
		<div className='App'>
			<BooksContextProvider>
				<AppRouter />
			</BooksContextProvider>
		</div>
	);
}

export default App;
