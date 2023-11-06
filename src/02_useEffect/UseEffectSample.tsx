import { useEffect, useRef, useState } from 'react';

// /useEffect route
function UseEffectSample() {
	// useEffect hook ile 1.state takibi yapılır, state değişiminde tetiklenir
	// component doma ilk basıldığı anda tetiklenir
	const [text, setText] = useState<string>('');
	const [text2, setText2] = useState<string>('');
	// const renderCount = useRef<number>(1);

	// böyle bir yazım şeklini react destekliyor. Peki bunu kullanırsak ne olur ?.
	// her defasında herhangi state değişim durumunda defalarca kez render olur.
	useEffect(() => {
		console.log('[] olamdan kullanım'); // apidan veri çekersek ve component de bir state değişimi olursa defalarca kez gereksiz yere network isteği atmış oluruz. Bu yanlış kullanıma dikkat edelim.
		// kaç kez render olduğu bilgisini okumak için mantıklı
		// ++renderCount.current;
		// console.log('	renderCount.current', renderCount.current);
	});

	useEffect(() => {
		//ComponentDidMount
		console.log('sayfa doma ilk kez basıldı');
	}, []); // [state1,state2,state3] yukarıdaki kod blogunda her hangi bir state takibi yok. 1 kereye mahsus component doma girdiğinde çalışır.
	// apidan veri çekip component açılışında ekrana basma işlemleri yapıcaz.

	useEffect(() => {
		// ComponentDidUpdate
		if (text !== '') {
			console.log('text state değişiminde çalışır');
		}
	}, [text]); // text state dinlemek için bir tanımlama yapıldı.,

	useEffect(() => {
		if (text !== '' || text2 !== '') {
			console.log('text1 veya text2 state değişiminde çalışır');
		}
	}, [text, text2]);

	return (
		<>
			Text: {text}
			<br></br>
			Text: {text2}
			<br></br>
			{/* Render Count: {renderCount.current} */}
			<br></br>
			<button
				onClick={() => {
					setText('Deneme');
				}}
			>
				Change Text1
			</button>
			<button
				onClick={() => {
					setText2('Deneme2');
				}}
			>
				Change Text2
			</button>
		</>
	);
}

export default UseEffectSample;
