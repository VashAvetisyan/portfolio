import { NavLink  } from "react-router-dom";

import './HeaderLink.scss'

type HeaderLinkProps = {
	link: string,
	title: string,
	img: string,
}

const HeaderLink = ({ link, title, img, }: HeaderLinkProps) => {
	return (
		<NavLink 
			className={({ isActive }) =>
				`headerLink ${isActive ? 'active' : ''}`.trim()
			}
			to={link}
		>
			<img src={img} alt={title} />
			<p>{title}</p>
		</NavLink >
	)
}

export default HeaderLink