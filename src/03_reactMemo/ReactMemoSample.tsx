import React, { useState } from 'react';
import Header from './Header';
// root component
function ReactMemoSample() {
	// root component state
	const [count, setCount] = useState<number>(0);
	const [title, setTitle] = useState<string>('My Header');
	return (
		<div>
			Sayaç : {count}
			<br></br>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				(+)
			</button>
			<hr></hr>
			<button
				onClick={() => {
					const title = window.prompt('Title giriniz');
					setTitle(title as string);
				}}
			>
				Set Title
			</button>
			<hr></hr>
			{/* child Component */}
			{/* <a href title> */}
			<Header title={title} />
		</div>
	);
}

export default ReactMemoSample;
