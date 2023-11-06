// component isimleri küçük harf ile başlamasın
// küçük harf ile component tanımı yapıldığında react bunu html elementi sanıyor

import { useState } from 'react';

// useState url
// <></> Fragment ifadesi, fragment ekranda bir çıktısı yok

function UseStateSample() {
	console.log('... rendering');
	// state mekanizması component içerisinde kullanıcının etkileşim sonucunda componentin ekrana bastığı değerlerin değişimin component localinde kontrol edilmesi ve componentin her bir state değişiminde tekrar render edilmesi olayı.

	// sayac
	// + butonuna bastığımızda 1 artsın
	// - buttonuna bastığımızda 1 azalsın
	// sayac 10 ve üzeri olduğunda mesaj versin

	// state değiştirmek için count kullanılamaz
	// değişen state değeri count değişkenine aktarılır
	// count değişkeni readOnly çalır
	// setCounter setter ifadesi
	// count ise getter ifadesi
	// useState hook ile component local state yöntemi mekanizması kazandırdık
	// hook function componentlerde componenete bir özellik kazandırmak için kullanılan özel fonksiyon yapıları.
	const [count, setCount] = useState<number>(0);
	const [random, setRandom] = useState<number>(1); // 2. bir state
	// 1. veya 2 state birbirinde bağımsız yönetilebilir
	// primative veya referans type için useState kullanabiliriz.
	let counter = 0;
	const increase = () => {
		// es6 ile gelen arrow function yazımı
		counter++;
		setCount(count + 1);
		console.log('counter', counter);
	};
	const decrease = () => {
		counter--;
		setCount(count - 1);
		console.log('counter', counter);
	};
	const generateRandom = () => {
		setRandom(Math.round(Math.random() * 100));
	};
	return (
		<>
			Sayac : {counter}
			<br></br>
			Sayac State: {count}
			<br></br>
			Random : {random}
			<br></br>
			<button onClick={increase}>(+)</button>
			<button onClick={decrease}>(-)</button>
			<button onClick={generateRandom}>Random</button>
			<br></br>
		</>
	);
}

// default keyword kullanıldığı için direkt olarak function ismi ile dışarı çıkacak UseStateSample
export default UseStateSample;
