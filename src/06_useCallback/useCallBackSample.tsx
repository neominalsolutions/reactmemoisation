import React, { useCallback, useState } from 'react';
import UserList from './UserList';

function useCallBackSample() {
	const [count, setCount] = useState<number>(0);

	const data = [
		{
			id: 1,
			name: 'ali',
		},
		{ id: 2, name: 'can' },
		{ id: 3, name: 'canan' },
	];

	const [users, setUsers] = useState<any[]>(data);

	const onDeleteItem = useCallback(
		(id: number) => {
			console.log('id', id);
			// id si silinecek id eşit olmayanlar silinmeyecek olanlar
			const notRemoved = users.filter((x) => x.id !== id);
			setUsers([...notRemoved]);
		},
		[users] // user değişmediği sürece onDeleteItem function memoisation yapılmış oldu. useMemo ile useCallback arasındaki tek fark birisi değişken değere bakar useMemo, biriside function memoisation bakar, useCallback
	);

	return (
		<div>
			<h1>UseCallBack Sample</h1>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Set
			</button>
			<hr></hr>
			<UserList
				items={users} // input props
				deleteItem={onDeleteItem}
			/>
		</div>
	);
}

export default useCallBackSample;
