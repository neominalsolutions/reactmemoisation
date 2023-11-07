// state değişimini component içinde değil burada ts dosyasında yöneteceğiz.
// Redux da da reducer dediğimiz kullanıcın action type göre state güncelleyen yapılar mevcut.

export type ThemeState = {
	color: string;
	bgColor: string;
};

export type ThemeActionType = {
	type: string; // hangi tipte action
	payload: string; // bgColor=white color=red
};

const changeForeColor = () => {
	console.log('fore color logic');
};

function ThemeReducer(state: ThemeState, action: ThemeActionType) {
	console.log('state', state);
	console.log('action', action);
	switch (action.type) {
		case 'THEMEBGCOLOR':
			state.bgColor = action.payload;
			changeForeColor();
			break;
		case 'THEMEFORECOLOR':
			state.color = action.payload;
			break;
		default:
			state.color = 'black';
			state.bgColor = 'white';
			break;
	}

	// state useReducer hook ile bağlanmak güncel state döndür dedik.
	return { ...state };
}

export default ThemeReducer;
