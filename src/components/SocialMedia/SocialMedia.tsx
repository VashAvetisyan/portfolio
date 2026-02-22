import SocialMediaItem from '../SocialMediaItem/SocialMediaItem'

import FBSvg from '../../assets/FB.svg'
import GtihubSvg from '../../assets/github.svg'
import LinkedinSvg from '../../assets/linkedin.svg'
import TelegramSvg from '../../assets/telegram.svg'

import './SocialMedia.scss'

const SocialMedia = () => {

	const SocialMediaLink = [
		{ link: "https://www.facebook.com/vash.avetisyan/", icon: FBSvg },
		{ link: "https://t.me/VashAvetisyan", icon: TelegramSvg },
		{ link: "https://www.linkedin.com/in/vashington-avetisyan-989519211/", icon: LinkedinSvg },
		{ link: "https://github.com/VashAvetisyan/", icon: GtihubSvg },
	];

	return (
		<div className='socialMedia'>
			{SocialMediaLink.map((item, index) => (
				<SocialMediaItem icon={item.icon} link={item.link} key={index} />
			))}
		</div>
	)
}

export default SocialMedia