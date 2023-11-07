import { Link, Outlet } from 'react-router-dom';

function Layout() {
	return (
		<>
			<nav>
				<Link to="/useState">Use State Sample</Link>{' '}
				<Link to="/useEffect">Use Effect Sample</Link>{' '}
				<Link to="/todos">Todos Sample</Link>{' '}
				<Link to="/asyncawait">Async Await Sample</Link>{' '}
				<Link to="/reactMemo">React Memo</Link>{' '}
				<Link to="/useRef">useRef Hook</Link>{' '}
				<Link to="/useMemo">useMemo Hook</Link>
			</nav>
			<main>
				{/* UseStateSample dynamic component içerisine girer çıkar */}
				<Outlet />
			</main>
		</>
	);
}

export default Layout;
