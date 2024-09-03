import { useState, useEffect } from 'react';

const useFetch = (url, options = {}) => {
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

				console.log('Response status:', response.status);

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
	}, [url, method, body, headers]);

	return { data, loading, error };
};

export default useFetch;
