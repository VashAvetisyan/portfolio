import './SecondTitle.scss'

type SecondTitleProps = {
	children: string
}

const SecondTitle = ({ children }: SecondTitleProps) => {
	return (
		<h2 className='secondTitle'>
			{children}
		</h2>
	)
}

export default SecondTitle