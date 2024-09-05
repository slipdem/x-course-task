import { useState, useEffect } from 'react';

export const useFetch = (url, options = {}) => {
	const { method = 'GET', body = null, headers = {} } = options;

	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const requestOptions = {
				method: method,
				headers: {
					'Content-Type': 'application/json',
					...headers,
				},
			};

			if (body) {
				requestOptions.body = JSON.stringify(body);
			}

			try {
				const response = await fetch(url, requestOptions);

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const result = await response.json();
				setData(result);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
		// eslint-disable-next-line
	}, [url]);

	return { data, loading, error };
};
