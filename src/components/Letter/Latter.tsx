import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Latter.scss'

const Latter = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		const serviceId = 'service_wj02ak5'
		const templateId = 'template_qlkq5eg'
		const publicKey = '52GCiM_xL-6PLC5xi'

		const templateParams = {
			from_name: name,
			from_email: email,
			to_name: "From My Portfolio",
			message: message,
		}
		console.log(templateParams)

		emailjs.send(serviceId, templateId, templateParams, publicKey)
			.then((response) => {
				console.log('Email sent successfully!', response)
				setName('')
				setEmail('')
				setMessage('')
			})
			.catch((error) => {
				console.log('Error sending email: ', error)
			})
	}

	return (
		<div className='latter'>
			<p className='latter__text'>
				I am always open to discussing <span> new projects, opportunities in tech world,
					partnerships </span> and more so <span> mentorship. </span>
			</p>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Name:" className='latter__input' value={name} onChange={(e) => setName(e.target.value)} />
				<input type="email" placeholder="Email:" className='latter__input' value={email} onChange={(e) => setEmail(e.target.value)} />
				<input type="text" placeholder="Message:" className='latter__input' value={message} onChange={(e) => setMessage(e.target.value)} />
				<button type="submit">
					Sumbit
				</button>
			</form>
		</div>
	)
}

export default Latter