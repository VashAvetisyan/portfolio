import './ContactPage.scss'

import ContactPageHeaderItem from '../../components/ContactPageHeaderItem/ContactPageHeaderItem';
import Title from '../../components/Title/Title';

import phoneIcon from '../../assets/PhoneIcon.svg'
import emailIcon from '../../assets/emailIcon.svg'
import Latter from '../../components/Letter/Latter';


const ContactPage = () => {
	const contactPageItems = [
		{ icon: phoneIcon, type: 'Phone:', text: '+37444549574' },
		{ icon: emailIcon, type: 'Email:', text: 'avetisyanvashington@gmail.com' }
	]

	return (
		<div className='contactPage'>
			<Title>
				Contact
			</Title>
			<div className='contactPage__header'>
				{contactPageItems.map((item, index) => (
					<ContactPageHeaderItem icon={item.icon} type={item.type} text={item.text} key={index} />
				))}
			</div>
			<Latter />
		</div>
	);
}

export default ContactPage;