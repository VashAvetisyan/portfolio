import './Input.scss'

type InputProps = {
	text: string
}

const Input = ({text}) => {
	return (
		<input type="text" placeholder={text} className='input'/>
	)
}

export default Input