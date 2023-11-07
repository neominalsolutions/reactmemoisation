import React, { useReducer } from 'react';
import ThemeReducer from './ThemeReducer';

function UseReducerSample() {
	console.log('... rendering');
	// dispatch => setState
	// state nesnesi ekran başmak için
	// hernagi bir state değişikliğinde component rendering yaptırır.
	const [state, dispatch] = useReducer(ThemeReducer, {
		bgColor: 'black',
		color: 'white',
	});

	const colors = ['white', 'purple', 'red', 'yellow', 'orange'];

	return (
		<>
			<div
				style={{
					minWidth: '50vw',
					minHeight: '50vh',
					backgroundColor: state.bgColor,
					color: state.color,
				}}
			>
				Text
			</div>
			<button
				onClick={() => {
					const index = Math.ceil(Math.random() * colors.length);

					// state değişimi yapmak için reducer'a type ve payload değeri gönderdim.
					dispatch({ type: 'THEMEBGCOLOR', payload: colors[index] });
				}}
			>
				Chnage BgColor
			</button>
			<br></br>
			<button
				onClick={() => {
					const index = Math.ceil(Math.random() * colors.length);
					// state değişimi yapmak için reducer'a type ve payload değeri gönderdim.
					dispatch({ type: 'THEMEFORECOLOR', payload: colors[index] });
				}}
			>
				Change Color
			</button>
		</>
	);
}

export default UseReducerSample;
