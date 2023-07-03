import React from 'react';
import { Books, Book, Cart, SignIn, Error404 } from '../pages';
import { Route, Routes } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const AppRouter = () => {
	const { isAuth } = useAuthContext();

	function PrivateLinks() {
		return (
			<Routes>
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
			</Routes>
		);
	}

	function PublicLinks() {
		return (
			<Routes>
				<Route
					path='*'
					element={<SignIn />}
				/>
			</Routes>
		);
	}

	return isAuth ? (
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
