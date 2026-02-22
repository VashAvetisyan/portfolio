import './ContactItem.scss'

type ContactItemProps = {
	icon: string;
	title: string;
	text: string;
};

const ContactItem = ({ icon, title, text }: ContactItemProps) => {
	return (
		<div className="contactItem">
			<div className="contactItem__img">
				<img src={icon} alt="Icon" />
			</div>
			<div className="contactItem__info">
				<h6 className="contactItem__info__title">
					{title}
				</h6>
				<p className="contactItem__info__text">
					{text}
				</p>
			</div>
		</div>
	)
}

export default ContactItem