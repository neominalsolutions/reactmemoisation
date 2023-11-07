import React, { memo } from 'react';

type UserProps = {
	items: any[]; // input
	deleteItem: (id: number) => void; // event emit output
};
// output  propslar bir component içinde gerçekleşen durumunu event olarak yansıtmak için kullanılırlar.
function UserList({ items, deleteItem }: UserProps) {
	console.log('... rendering');
	const onDeleteItem = (id: number) => {
		// event emit işlemi yaptık.
		deleteItem(id);
	};
	return (
		<>
			{items.map((item: any) => {
				return (
					<div key={item.id}>
						{item.name}
						<button onClick={() => onDeleteItem(item.id)}>Sil</button>
					</div>
				);
			})}
		</>
	);
}

export default memo(UserList);
