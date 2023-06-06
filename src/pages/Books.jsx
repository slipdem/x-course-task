import React from 'react';
import { Header, Catalog } from '../components';

const Books = () => {
	return (
		<>
			<Header />
			<div className='container'>
				<Catalog />
			</div>
		</>
	);
};

export default Books;
