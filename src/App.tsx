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
//import Layout from './layouts/Layout';
// import ReactMemoSample from './03_reactMemo/ReactMemoSample';
// import UseRefSample from './04_useRef/UseRefSample';
// import UseMemoSample from './05_useMemo/UseMemoSample';
// import useCallBackSample from './06_useCallback/useCallBackSample';
//import DebouncingSample from './07_debouncing/DebouncingSample';

// sayfa route component tanımlarını react.lazy ile sarıp her bir sayfa componentinin ayrı js dosyasına ayrılmasını sağlayalım
// ilgili route gittiğimiz sadece o js dosya yüklesin gereksiz yere tüm uygulamadaki js dosyası yüklenmesin.
const Layout = React.lazy(() => import('./layouts/Layout'));
const ReactMemoSample = React.lazy(
	() => import('./03_reactMemo/ReactMemoSample')
);
const UseRefSample = React.lazy(() => import('./04_useRef/UseRefSample'));
const UseMemoSample = React.lazy(() => import('./05_useMemo/UseMemoSample'));
const useCallBackSample = React.lazy(
	() => import('./06_useCallback/useCallBackSample')
);
const DebouncingSample = React.lazy(
	() => import('./07_debouncing/DebouncingSample')
);

// bu özelliğe code splitting diyoruz. angular lazy loaded feature özelliği.

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
					<Route path="useCallback" Component={useCallBackSample}></Route>
					<Route path="debouncing" Component={DebouncingSample}></Route>
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
