import HeaderLink from '../HeaderLink/HeaderLink';

import homeSvg from '../../assets/homeSVG.svg'
import resumeSvg from '../../assets/resumeSVG.svg'
import workSvg from '../../assets/workSVG.svg'
import contactSvg from '../../assets/contactSVG.svg'


import './Header.scss'

const Header = () => {
	const headerLinks = [
		{ link: "/", title: "Home", img: homeSvg },
		{ link: "/resume", title: "Resume", img: resumeSvg },
		{ link: "/work", title: "Work", img: workSvg },
		{ link: "/contact", title: "Contact", img: contactSvg },
	];

	return (
		<header className="app-header">
			<nav className="app-header__nav">
				{headerLinks.map((item, index) => (
					<HeaderLink link={item.link} title={item.title} img={item.img} key={index} />
				))}
			</nav>

		</header>
	);
};

export default Header;
