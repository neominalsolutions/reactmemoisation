import { useEffect, useState } from 'react';
import { getTodos } from '../api/todos.api';
import { Todo } from '../api/todos.model';

function TodosSample() {
	const [todos, setTodos] = useState<Todo[]>([]); // referance type

	const controller = new AbortController();
	// 1.yöntem Promise ile veri çekme (ES6)
	const loadTodos = () => {
		getTodos({ signal: controller.signal }) // todo.api
			.then((response) => {
				// resolve edildiğinde promise hatası çözüldüğünde
				// axios üzerinden verilere erişirken .data formatında responseData bilgisine erişebiliriz. spread operator ES6 veya ES7
				setTodos([...response.data]);
			})
			.catch((err) => {
				// network yada kod blogunda bir hata durumdaki
				console.log('err', err);
			});
	};

	//2. yöntem async await ile veri çekme (ES7)
	const loadTodosAsync = async () => {
		try {
			const response = await getTodos({ signal: controller.signal });
			setTodos([...response.data]);
		} catch (error) {
			console.log('network error');
		}
	};

	useEffect(() => {
		// useEffect async çalışır ve component doma girdiğinde ekranda bir veri göstericeksek on doğu yer burasıdır.
		// loadTodos(); // veri çekme istediği
		loadTodosAsync(); // useEffect async function call destekler.

		return () => {
			// clean up domdan çıkış anı
			console.log('domdan çıkış anı');
			controller.abort();
		};
	}, []);

	return (
		<>
			{todos && (
				<>
					{todos.map((item) => {
						return <div key={item.id}>{item.title}</div>;
					})}
				</>
			)}
		</>
	);
}

export default TodosSample;
