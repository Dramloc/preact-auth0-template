import { h } from 'preact';
import { Router } from 'preact-router';

import Callback from '../routes/callback';
import Header from './header';
import Home from '../routes/home';

if (module.hot) {
	require('preact/debug');
}

export default function App() {
	return (
		<div id="app">
			<Header />
			<Router>
				<Home path="/" />
				<Callback path="/callback" />
			</Router>
		</div>
	);
}
