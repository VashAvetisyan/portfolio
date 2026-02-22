import "./ContactPageHeaderItem.scss"

type ContactPageHeaderItemProps = {
	icon: string,
	type: string,
	text: string
}

const ContactPageHeaderItem = ({ icon, type, text }: ContactPageHeaderItemProps) => {
	return (
		<div className="contactPageHeaderItem">
			<img src={icon} alt="" />
			<div className="contactPageHeaderItem__right">
				<h6>{type}</h6>
				<p>{text}</p>
			</div>
		</div>
	)
}

export default ContactPageHeaderItem