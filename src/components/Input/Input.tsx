import './Input.scss'

type InputProps = {
	text: string
}

const Input = ({ text }: InputProps) => {
	return (
		<input type="text" placeholder={text} className='input' />
	)
}

export default Input