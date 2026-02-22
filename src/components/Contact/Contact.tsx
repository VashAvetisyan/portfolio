import './Contact.scss'

import PhoneSvg from '../../assets/gridicons_phone.svg'
import EmailSvg from '../../assets/mdi_email-open-outline.svg'
import LocationSvg from '../../assets/ion_location-outline.svg'
import ContactItem from '../ContactItem/ContactItem'


const Contact = () => {

	const contactArray = [
		{ icon: PhoneSvg, title: "Phone", text: "+37444549574" },
		{ icon: EmailSvg, title: "Email", text: "avetisyanvashington@gmail.com" },
		{ icon: LocationSvg, title: "Location", text: "Armenai, Yerevan" }
	]
	return (
		<div className='contact'>
			{contactArray.map((item, index) => (
				<ContactItem icon={item.icon} title={item.title} text={item.text} key={index} />
			))}
		</div>
	)
}

export default Contact