import './Info.scss'

import SocialMedia from '../SocialMedia/SocialMedia'
import Contact from '../Contact/Contact'

const Info = () => {
	return (
		<div className="info">
			<h2 className="info__name">
				Vashington Avetisyan
			</h2>
			<p className="info__text">
				Frond-end Developer
			</p>
			<SocialMedia />
			<Contact />
		</div>
	)
}

export default Info