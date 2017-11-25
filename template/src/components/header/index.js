import { h } from 'preact';
import { Link } from 'preact-router/match';

import style from './style';

export default function Header() {
	return (
		<header class={style.header}>
			<h1>Preact App</h1>
			<nav>
				<Link activeClassName={style.active} href="/">Home</Link>
			</nav>
		</header>
	);
}
