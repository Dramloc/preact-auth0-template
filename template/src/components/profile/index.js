import { h, Component } from 'preact';

import { getProfile } from '../../lib/auth';
import style from './style';

export default class Profile extends Component {

	state = {
		profile: undefined
	}

	getProfile() {
		return getProfile()
			.then(profile => this.setState({ profile }));
	}

	componentDidMount() {
		this.getProfile();
	}

	render({ }, { profile }) {
		return (
			<div class={style.profile}>
				{(profile !== undefined) ?
					<div>
						<div class={style.profile__picture} >
							<img src={profile.picture} alt="profile" />
						</div>
						<p class={style.profile__name}>{profile.name}</p>
						<p class={style.profile__nickname}>{profile.nickname}</p>
					</div> :
					<p>Loading profile...</p>
				}
			</div >
		);
	}
}
