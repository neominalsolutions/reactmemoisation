import React from 'react';
import logo from './logo.svg';
import './App.css';
// aynı dosya uzantısından birden fazla dosyayı import etme şeklimiz
import { Route, Routes } from 'react-router-dom';
import UseStateSample from './01_useState/UseStateSample';
import UseEffectSample from './02_useEffect/UseEffectSample';
import TodosSample from './02_useEffect/TodosSample';
import AsyncAwaitSample from './02_useEffect/AsyncAwaitSample';
import PromiseSample from './02_useEffect/PromiseSample';

// App dosyasının uygulamanın routing dosyası olarak kullanıyoruz.
function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					path=""
					element={
						<>
							<h1>Anasayfa</h1>

							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'center',
								}}
							>
								<div
									style={{
										flexGrow: '2',
										maxWidth: '200px',
										minHeight: '200px',
									}}
								>
									Async
									<AsyncAwaitSample />
								</div>
								<div
									style={{
										flexGrow: '2',
										maxWidth: '200px',
										minHeight: '200px',
									}}
								>
									Promise
									<PromiseSample />
								</div>
							</div>
						</>
					}
				></Route>
				<Route
					path="/about"
					element={
						<>
							<p>About</p>
						</>
					}
				></Route>
				<Route path="/contact" element={<>Contact</>}></Route>
				<Route path="/useState" Component={UseStateSample}></Route>
				<Route path="/useEffect" Component={UseEffectSample}></Route>
				<Route path="/todos" Component={TodosSample}></Route>
				<Route path="/asyncawait" Component={AsyncAwaitSample}></Route>
			</Routes>
		</div>
	);
}

export default App;
