import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';

type AuthenticatedUserState = {
	sub: string;
	name: string;
};

// hangi sayfada bu hook çağırılırsa o sayfada user bilgilerini getireceğiz.
const UseAuthenticatedUser = () => {
	const [user, setUser] = useState<AuthenticatedUserState | null>(null);

	useEffect(() => {
		// apidan da veri çekilebilir
		console.log('custom hook');

		const token = localStorage.getItem('token');

		if (token !== null) {
			const decoded: any = jwtDecode(token);
			// let _user: AuthenticatedUserState = {
			// 	sub: decoded.sub,
			// 	name: decoded.name,
			// };
			setUser({ ...decoded });
		} else {
			setUser(null);
		}
	}, []); // sayfa ilk açılışında bir kereye mahsus tetiklenir.

	return user;
};

export default UseAuthenticatedUser;
