import React from 'react';
import { Books, Book, Cart, SignIn, Error404 } from '../pages';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

const AppRouter = () => {
	function PrivateLinks() {
		return (
			<Routes>
				<Route element={<Layout />}>
					<Route
						path='/'
						element={<Books />}
					/>
					<Route
						path='/books'
						element={<Books />}
					/>
					<Route
						path='/books/:id'
						element={<Book />}
					/>
					<Route
						path='/cart'
						element={<Cart />}
					/>
					<Route
						path='/signin'
						element={<SignIn />}
					/>
					<Route
						path='*'
						element={<Error404 />}
					/>
				</Route>
			</Routes>
		);
	}

	function PublicLinks() {
		return (
			<Routes>
				<Route element={<Layout />}>
					<Route
						path='*'
						element={<SignIn />}
					/>
				</Route>
			</Routes>
		);
	}

	const isUserAuthenticated = () => {
		return localStorage.getItem('validUser') === 'true';
	};

	return isUserAuthenticated ? (
		<Routes>
			<Route
				path='*'
				element={<PrivateLinks />}
			/>
		</Routes>
	) : (
		<Routes>
			<Route
				path='*'
				element={<PublicLinks />}
			/>
		</Routes>
	);
};

export default AppRouter;
