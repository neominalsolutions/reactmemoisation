import React from 'react';
import logo from './logo.svg';
import './App.css';
// aynı dosya uzantısından birden fazla dosyayı import etme şeklimiz
import { Route, Routes } from 'react-router-dom';
import UseStateSample from './01_useState/UseStateSample';
import UseEffectSample from './02_useEffect/UseEffectSample';

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
				<Route path='/useState' Component={UseStateSample}></Route>
				<Route path='/useEffect' Component={UseEffectSample}></Route>
			</Routes>
		</div>
	);
}

export default App;
