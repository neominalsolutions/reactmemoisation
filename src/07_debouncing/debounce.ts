// 300ms yaklaşık 3 karakter araması yapılabilir
// yavaş yazan kullanılcarı ve 500ms de bir serverside search yapmayı düşünürsek bu durumda en falza 500ms verebiliriz.

const debounce = (fn: Function, ms = 300) => {
	let timeoutId: ReturnType<typeof setTimeout>;
	return function (this: any, ...args: any[]) {
		// her bir açılan timing değerini her bir arama sonrası clear ediyor
		// yeniden bir timing değeri ayalayıp aramayı bekletiyor.
		// network request düşer
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => fn.apply(this, args), ms);
	};
};

export default debounce;
