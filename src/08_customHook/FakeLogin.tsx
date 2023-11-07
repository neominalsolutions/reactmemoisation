import React from 'react';
import { Link } from 'react-router-dom';
import UseAuthenticatedUser from './UseAuthenticatedUser';

function FakeLogin() {

    

	return (
		<div>
			<Link to="/customHook">Custom Hook Sample</Link>
			<br></br>
			<button
				onClick={() => {
					localStorage.setItem(
						'token',
						'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFsaSIsImlhdCI6MTUxNjIzOTAyMn0.4HRqYdRE9oC2HzeBrU782bhQn09y120dBRiLCYBAFjA'
					);
				}}
			>
				Fake Login
			</button>
		</div>
	);
}

export default FakeLogin;
