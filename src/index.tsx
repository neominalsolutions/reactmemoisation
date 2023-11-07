import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './10_useContext/CartProvider';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<>
		{/* Root component */}
		<BrowserRouter>
			{/* tüm sayfalardan cart provider içerisinde cartItems state erişebilirim. */}
			<CartProvider>
				{/* react lazy kullanınca js dosyaları sayfa asenkron yükleniyor. ui da sayfalar arası asenkron geç,iş sağlayabilmek için bütün uygulamayı suspense elementi ile sarmallamamız gerekiyor */}
				<Suspense fallback={<>... loading</>}>
					{/* Child Component */}
					<App />
				</Suspense>
			</CartProvider>
		</BrowserRouter>
	</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
