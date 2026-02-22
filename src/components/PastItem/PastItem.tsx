import './PastItem.scss'

import LocationSvg from '../../assets/location-pin-svgrepo-com.svg'


type PastItemProps = {
	data: string,
	role: string,
	location: string
}
const PastItem = ({ data, role, location }: PastItemProps) => {

	return (
		<div className='pastItem'>
			<p className='pastItem__data'>
				{data}
			</p>
			<p className='pastItem__role'>{role}</p>
			<div className='pastItem__bottom'>
				<img src={LocationSvg} alt="Icon" width={20} />
				<p className='pastItem__location'>{location}</p>
			</div>
		</div>
	)
}

export default PastItem