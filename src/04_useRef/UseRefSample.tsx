import React, { useEffect, useRef, useState } from 'react';

function UseRefSample() {
	console.log('... rendering');
	const [inputValue, setInputValue] = useState<string>('');
	const inputRef = useRef<HTMLInputElement>(null);

	// rendering sonrası son güncel değeri memoisation yaparak değerin kaybolmamasını sağladık.
	const renderCount = useRef<number>(0); // c# static değişkenlere çok benzer. değerin sıfırlanmaması, state sıfırlanmaması gereken durumlarda kullanılabilir.
	// let renderCount2 = 0;

	const onInputChange = (event: any) => {
		setInputValue(event.target.value);
	};

	const onInputBlur = () => {
		if (inputRef.current?.value) {
			setInputValue(inputRef.current.value);
		}
	};

	// input value state her değişiminde kaç adet render alındığını bul
	useEffect(() => {
		console.log('renderCount', renderCount);
		renderCount.current = renderCount.current + 1;
		// renderCount2++;
	}, [inputValue]);

	return (
		<div>
			With State : <input value={inputValue} onChange={onInputChange} />
			<button
				onClick={() => {
					setInputValue('');
				}}
			>
				Clear With State
			</button>
			<br></br>
			{/* Render Count 2: {renderCount2} */}
			{/* inputun domadaki referansına bağlanıp inputun değerini okuyacağız */}
			{/* arama işlemlerin ya OnBlur kullanalım yada Debouncing işlemi yapalım. Belirli bir süre sonra inputun aranan değerini gönderelim. */}
			With Ref: <input ref={inputRef} onBlur={onInputChange} />
			<button
				onClick={() => {
					if (inputRef.current) {
						inputRef.current.value = '';
					}
				}}
			>
				Input Clear With Ref
			</button>
			<br></br>
			RenderCount : {renderCount.current}
		</div>
	);
}

export default UseRefSample;
