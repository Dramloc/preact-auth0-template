import { h, Component } from 'preact';

import { handleAuthentication } from '../../lib/auth';

export default class Callback extends Component {
	componentDidMount() {
		if (/access_token|id_token|error/.test(location.hash)) {
			handleAuthentication();
		}
	}

	render() {
		return (
			<div>You are being logged in...</div>
		);
	}
}
