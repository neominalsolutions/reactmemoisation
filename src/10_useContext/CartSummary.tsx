import React, { useContext } from 'react';
import { CartContext } from './CartProvider';

function CartSummary() {
	// doma farklı bir sayfa girdiğinde bile güncel global state bilgisine erişim sağladık.
	const { cartItems } = useContext(CartContext);

	return (
		<div>
			<h1>Sepetteki Ürünler</h1>
			{cartItems && (
				<>
					{cartItems.map((item: any) => {
						return (
							<div key={item.id}>
								{item.name} {item.quantity}
							</div>
						);
					})}
				</>
			)}
		</div>
	);
}

export default CartSummary;
