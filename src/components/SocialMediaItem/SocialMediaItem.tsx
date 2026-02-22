import "./SocialMediaItem.scss";

type SocialMediaItemProps = {
	icon: string;
	link: string;
};

const SocialMediaItem = ({ icon, link }: SocialMediaItemProps) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="socialMediaItem"
		>
			<img src={icon} />
		</a>
	);
};

export default SocialMediaItem;
