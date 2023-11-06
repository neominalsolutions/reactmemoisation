import axios from 'axios';
import { useEffect, useState } from 'react';

function PromiseSample() {
	const [users, setUsers] = useState<any[]>();
	const [posts, setPosts] = useState<any[]>();

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
			setUsers([...res.data]);
		});

		axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
			setPosts([...res.data]);
		});
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

export default PromiseSample;
