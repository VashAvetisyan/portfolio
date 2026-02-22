import { useState } from "react";
import Title from "../../components/Title/Title";
import WorkNavbarLink from "../../components/WorkNavbarLink/WorkNavbarLink";

import shopAppScreen from '../../assets/shop-app-screen.png'
import socialMediaAppScreen from '../../assets/social-media-screenshot.png'
import toDoImage from '../../assets/toDoImage.png'


import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";

import './Work.scss'

const Work = () => {

	const workNavbarLinks = ["All", "App Development", "Web Development", "Design"]

	const [active, setActive] = useState<number>(0)

	const workItems = [
		{
			img: shopAppScreen,
			type: "Shop App",
			name: ['React.js', 'Next.js', 'TypeScript', 'Zustand', 'Tailwindcss', 'React-hook-form', 'React-toastify'],
			link:"https://shop-app-one-umber.vercel.app/"


		},
		{
			img: socialMediaAppScreen,
			type: "Social Media",
			name: ['React.js', 'TypeScript', 'Redux', 'Tailwindcss', 'FireBase',],
			link:"https://social-media-app-umber-theta.vercel.app/"
		},
		{
			img: toDoImage,
			type: "To-do List",
			name: ['React.js'],
			link:"https://to-do-list-eight-inky.vercel.app/"
		},
	]

	return (
		<div className="work">
			<Title>Portfolio</Title>
			<ul className="work__navbar">
				{workNavbarLinks.map((item, index) => (
					<WorkNavbarLink
						key={index}
						id={index}
						isActive={active === index}
						onClick={setActive}
					>
						{item}
					</WorkNavbarLink>
				))}
			</ul>
			<div className="work__main">
				{workItems.map((item, index) => (
					<PortfolioItem img={item.img} type={item.type} name={item.name} key={index} link={item.link}/>
				))}
			</div>
		</div>
	);
}

export default Work;