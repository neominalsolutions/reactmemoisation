import React, { useContext } from 'react';
import { CartContext } from './CartProvider';
import { Link } from 'react-router-dom';

function UseContextSample() {
	console.log('... rendering');
	const { addToCart } = useContext(CartContext);

	const products = [
		{
			id: 1,
			name: 'Ürün-1',
		},
		{ id: 2, name: 'Ürün-2' },
		{ id: 3, name: 'Ürün-3' },
	];

	return (
		<div>
			<Link to="/cartSummary">Sepete Git</Link>
			{products.map((item) => {
				return (
					<div key={item.id}>
						{item.name}
						<button
							onClick={() => {
								// global state güncellemesi yapacağız.
								addToCart({ quantity: 1, name: item.name, id: item.id });
							}}
						>
							Sepete Ekle
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default UseContextSample;
