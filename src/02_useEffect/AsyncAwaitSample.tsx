import axios from 'axios';
import { useEffect, useState } from 'react';

function AsyncAwaitSample() {
	const controller = new AbortController();
	// elimde network requestlerini yönettiğim bir nesne var
	// network istekleri atarken bu nesne üzerinden sinyali kesmek için sinyal bilgisi gönderiyoruz.

	const [users, setUsers] = useState<any[]>();
	const [posts, setPosts] = useState<any[]>();

	const loadData = async () => {
		let users = (
			await axios.get('https://jsonplaceholder.typicode.com/users', {
				signal: controller.signal,
			})
		).data;
		let posts = (
			await axios.get('https://jsonplaceholder.typicode.com/posts', {
				signal: controller.signal,
			})
		).data;

		setUsers([...users]);
		setPosts([...posts]);
	};

	useEffect(() => {
		loadData();

		// clean up function domdan çıkarken ki temizlik.
		return () => {
			// class component hangi lifecyle method, componentwillunmount
			console.log('component domdan çıktığında kendi kendine tetiklenir');
			// bir sayfadan başka bir sayafaya geçişte temizlenecek bir kod bloğu varsa burada bu işlemi yaparız.
			controller.abort();
		};
	}, []);

	return (
		<>
			{users?.map((item) => {
				return <>{item.name}</>;
			})}
			<hr></hr>
			{posts?.map((item) => {
				return <>{item.title}</>;
			})}
		</>
	);
}

export default AsyncAwaitSample;
