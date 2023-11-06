import axios from 'axios';
import { useEffect, useState } from 'react';

function AsyncAwaitSample() {
	const [users, setUsers] = useState<any[]>();
	const [posts, setPosts] = useState<any[]>();

	const loadData = async () => {
		let users = (await axios.get('https://jsonplaceholder.typicode.com/users'))
			.data;
		let posts = (await axios.get('https://jsonplaceholder.typicode.com/posts'))
			.data;

		setUsers([...users]);
		setPosts([...posts]);
	};

	useEffect(() => {
		loadData();
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
