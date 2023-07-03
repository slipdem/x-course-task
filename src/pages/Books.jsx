import React from 'react';
import { Header, Catalog, Footer } from '../components';

const Books = () => {
	return (
		<>
			<Header />
			<div className='container'>
				<Catalog />
			</div>
			<Footer />
		</>
	);
};

export default Books;
