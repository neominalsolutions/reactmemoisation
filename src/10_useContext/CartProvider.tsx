import { Children, createContext, useState } from 'react';

export type CartContextType = {
	cartItems: any[];
	addToCart(item: any): void;
};

export const CartContext = createContext<any>(null);

// children değimiz child component yani uygulama içerisinde app altına sarmallanmış tüm component child görevi görecek
const CartProvider = ({ children }: any) => {
	// Provide ile local useState mekanizmasını globalleştirmiş olduk
	const [cartItems, setCartItems] = useState<any[]>([]);

	const addToCart = (cartItem: any) => {
		console.log('addToCart', cartItem);
		setCartItems([...cartItems, cartItem]); // yeni bir item ekleme işlemi
	};

	return (
		<CartContext.Provider value={{ cartItems, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
