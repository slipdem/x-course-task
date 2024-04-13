import React from 'react';
import {  Book, Cart, SignIn, Page404 } from 'pages';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { Catalog } from 'pages';

const AppRouter = () => {
	function PrivateLinks() {
		return (
			<Routes>
				<Route element={<Layout />}>
					<Route
						path='/'
						element={<Catalog />}
					/>
					<Route
						path='/book/:id'
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
						element={<Page404 />}
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
