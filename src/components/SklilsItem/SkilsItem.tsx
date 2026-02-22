import './SkilsItem.scss'

type SkilsItemProps = {
	children: string
}

const SkilsItem = ({ children }: SkilsItemProps) => {
	return (
		<div className='skilsItem'>{children}</div>
	)
}

export default SkilsItem