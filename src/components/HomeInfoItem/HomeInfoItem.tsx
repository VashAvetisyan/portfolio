import './HomeInfoItem.scss'

interface HomeInfoItemProps {
  icon: string;
  title: string;
  text: string;
}

const HomeInfoItem = ({ icon, title, text } : HomeInfoItemProps) => {
	return (
		<div className='homeInfoItem'>
			<div className='homeInfoItem__header'>
				<img src={icon} alt="" />
				<h4 className='homeInfoItem__header__title'>
					{title}
				</h4>
			</div>
			<p className='homeInfoItem__text'>
				{text}
			</p>
		</div>
	)
}

export default HomeInfoItem