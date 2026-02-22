import Input from '../Input/Input'
import './Latter.scss'

const Latter = () => {
	return (
		<div className='latter'>
			<p className='latter__text'>
				I am always open to discussing <span> new projects, opportunities in tech world,
					partnerships </span> and more so <span> mentorship. </span>
			</p>
			<form action="">
				<Input text="Name:" />
				<Input text="Email:" />
				<Input text="Message:" />
				<button type="submit">
					Sumbit
				</button>
			</form>
		</div>
	)
}

export default Latter