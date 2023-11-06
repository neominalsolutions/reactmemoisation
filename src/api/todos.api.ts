// Class yapıları kullanıbiliyoruz.

import axios from 'axios';
import { Todo } from './todos.model';

// Promise Ecmascript 6 ile birlikte hayatımıza girdi.
// ReactTS Ecmascript 6 versiyonu destekliyor.
// Tüm tarayıcıların ortak olarak kullandığı ecmascript formatı ES5'tir.
// TS => JS formatına çevirecek transpiler => Typescript
// Babel transpiler => ES6, ES7, ES8 => ES5 formatına çıktı verir.
// Webpack js module paketleme sistemi => chunk dosyaları dediğimiz sıkıştırılmış js dosyalarına dönüştürüyor. minify ediyor. js dosyalarını modüllere ayırıyor. developer js ayrı bir chunk dosyası, vendor dediğimiz react uygulamasının çalışma için gerekli olan js dosyalarına ayrı bir chunk haline getiriyor.

// export interface Todo {
// 	id: number;
// 	title: string;
// 	completed: boolean;
// }

export const getTodos = ({ signal }: any) => {
	return axios.get<Todo[]>(
		'https://jsonplaceholder.typicode.com/todos',
		signal
	);
};
