import React, { useEffect, useMemo, useState } from 'react';

function UseMemoSample() {
	console.log('...rendering');
	const [count, setCount] = useState<number>(0); // tekrar rendering
	// faktoriel number değişmediği zaman defalarca aşağıda faktoriel hesaplama algoritması çalışmasın diye useMemo yapıcağız.
	const [faktorielNumber, setFaktorielNumber] = useState<number>(10);

	// component içinde yoğun hesaplama gereken functionların sonuçlarını memoisation yapmak için useMemo hook kullanımını unutmayalım.
	const factoriel = (nm: number) => {
		console.log('factoriel func');
		let result = 1;
		for (let index = 2; index <= nm; index++) {
			result *= index;
		}
		return result;
	};

	// useEffect(() => {
	// 	//faktorielNumber değişimde işlem yap
	// }, [faktorielNumber]);

	// faktorielNumber değişimi olana kadar faktorielResult değişkenin değeri memoisation yap cachle eğer faktorielNumber değişirse cache yeniden hesapla.
	const faktorielResult: number = useMemo(
		() => factoriel(faktorielNumber),
		[faktorielNumber]
	);
	return (
		<div>
			Sayac : {count}
			<br></br>
			Faktoriel Sonuc: {faktorielResult}
			<hr></hr>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				(+)
			</button>
			<br></br>
			Hesaplanacak Faktoriel Değeri : {faktorielNumber}
			<br></br>
			<button
				onClick={() => {
					// 0 ile 100 arasında bir random değer oluştur
					setFaktorielNumber(Math.ceil(Math.random() * 100));
				}}
			>
				Hesapla
			</button>
		</div>
	);
}

export default UseMemoSample;
