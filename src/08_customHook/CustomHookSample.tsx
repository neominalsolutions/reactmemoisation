import React from 'react';
import UseAuthenticatedUser from './UseAuthenticatedUser';
import { jwtDecode } from 'jwt-decode';
import UseFetchApi from './UseFetchApi';

function CustomHookSample() {
	// component doma basılmadan önceki anı yakalayıp ilgi state bilgilerini component bastığımız yapılar.
	const user = UseAuthenticatedUser(); // useAuthenticated user state etitklenip kullanıcıya ait bilgileri ekrana yansıtacağız.

	// const token = localStorage.getItem('token');
	// if (token !== null) {
	// 	const data = jwtDecode(token);
	// }

	// const {isAdmin,Permissions} = UsePermissions();

	const data = UseFetchApi('https://jsonplaceholder.typicode.com/posts');

	return (
		// <AdminOnly></AdminOnly>
		// <ManagerOnly></ManagerOnly>
		// <View roles={['Admin','Manager']}></View>
		<div>
			{data && <>Data Length : {data.length}</>}
			<br></br>
			{user != null ? (
				<>
					name: {user.name}
					<br></br>
					id: {user.sub}
				</>
			) : (
				<>User Yok</>
			)}
		</div>
	);
}

export default CustomHookSample;
