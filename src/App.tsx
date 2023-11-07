import React from 'react';
import logo from './logo.svg';
import './App.css';
// aynı dosya uzantısından birden fazla dosyayı import etme şeklimiz
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import UseStateSample from './01_useState/UseStateSample';
import UseEffectSample from './02_useEffect/UseEffectSample';
import TodosSample from './02_useEffect/TodosSample';
import AsyncAwaitSample from './02_useEffect/AsyncAwaitSample';
import PromiseSample from './02_useEffect/PromiseSample';
import Layout from './layouts/Layout';
import ReactMemoSample from './03_reactMemo/ReactMemoSample';
import UseRefSample from './04_useRef/UseRefSample';
import UseMemoSample from './05_useMemo/UseMemoSample';

// App dosyasının uygulamanın routing dosyası olarak kullanıyoruz.
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" Component={Layout}>
					<Route path="useState" Component={UseStateSample}></Route>
					<Route path="useEffect" Component={UseEffectSample}></Route>
					<Route path="todos" Component={TodosSample}></Route>
					<Route path="asyncawait" Component={AsyncAwaitSample}></Route>
					<Route path="reactMemo" Component={ReactMemoSample}></Route>
					<Route path="useRef" Component={UseRefSample}></Route>
					<Route path="useMemo" Component={UseMemoSample}></Route>
				</Route>
				<Route
					path="admin"
					element={
						<>
							<Outlet />
						</>
					}
				>
					<Route path="users" element={<>User Page</>}></Route>
					{/* /admin/users */}
				</Route>
			</Routes>
		</div>
	);
}

export default App;
