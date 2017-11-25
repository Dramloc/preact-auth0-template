import { h } from 'preact';

import { login, logout, isAuthenticated } from '../../lib/auth';
import Profile from '../../components/profile';
import style from './style';

export default function Home() {
	return (
		<div class={style.home}>
			<h1>Home</h1>
			<p>This is the Home component.</p>
			{isAuthenticated() ?
				<div>
					<Profile />
					<button onClick={logout}>Logout</button>
				</div> :
				<button onClick={login}>Login</button>
			}
		</div>
	);
}
