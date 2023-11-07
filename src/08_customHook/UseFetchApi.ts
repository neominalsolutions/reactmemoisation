import axios from 'axios';
import { useEffect, useState } from 'react';

const UseFetchApi = (url: string) => {
	const [data, setData] = useState<any>(null);

	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				console.log('fetch data', response.data);
				setData(response.data);
			})
			.catch((err) => {
				alert('Hata mesajı bas');
			});
	}, []); // sayfa ilk açılışında bir kereye mahsus tetiklenir.

	return data;
};

export default UseFetchApi;
