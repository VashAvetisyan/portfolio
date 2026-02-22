import './PortfolioItem.scss'

type PortfolioItem = {
	img: string,
	type: string,
	name: Array<string>,
	link:string
}

const PortfolioItem = ({img, type, name, link} : PortfolioItem) => {
  return (
	<a className='portfolioItem' href={link} target='_blank'>
		<img src={img} alt="" />
		<h4 className='portfolioItem__type'>
			{type}
		</h4>
		<div className='portfolioItem__name'>
			{name.map((item, index) =>
				<span key={index}>{item}</span> 
			)}
		</div>
	</a>
  )
}

export default PortfolioItem