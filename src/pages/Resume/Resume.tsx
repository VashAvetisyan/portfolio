import PastItem from '../../components/PastItem/PastItem'
import Title from '../../components/Title/Title'

import educationImg from "../../assets/education.png"
import experienceImg from "../../assets/experience.png"


import SkilsItem from '../../components/SklilsItem/SkilsItem'

import './Resume.scss'

const Resume = () => {
	const educationArray = [
		{ data: "09/2022 - Present", role: "Informatics and Applied mathematics", location: "YSU" },
		{ data: "12/2020 - 05/2021", role: "Frond-end Development (React.js)", location: "Yerean" },
	]

	const experienceArray = [
		{ data: "01/2024 - 01/2026", role: "Vmix spacialst", location: "SoftConstruct" },
		{ data: "09/2022 - 05/2023", role: "Frond-end Developer", location: "Mach Tech" },
	]

	const skilsArray = ["HTML", "CSS/SASS", "Bootstrap(4,5)", "JavaScript(ES5, ES6)", "React.js", "Redax", "Zustand", "Next.js", "Tailwind CSS", "Git/Github"]
	const softSkilsArray = ["Time Management", "Research", "Flexibility", "Self-study", "Teamwork", "English (B1-B2)"]

	return (
		<div className='resume'>
			<Title>
				Resume
			</Title>
			<div className='resume__past'>
				<div className='resume__past__block'>
					<div className='resume__past__block__header'>
						<img src={educationImg} alt="" />
						<h5 className='resume__past__block__header__title'>
							Education
						</h5>
					</div>
					<div className='resume__past__block__main'>
						{educationArray.map((item, index) => (
							<PastItem data={item.data} role={item.role} location={item.location} key={index} />
						))}
					</div>
				</div>
				<div className='resume__past__block'>
					<div className='resume__past__block__header'>
						<img src={experienceImg} alt="" />
						<h5 className='resume__past__block__header__title'>
							Experience
						</h5>
					</div>
					<div className='resume__past__block__main'>
						{experienceArray.map((item, index) => (
							<PastItem data={item.data} role={item.role} location={item.location} key={index} />
						))}
					</div>
				</div>
			</div>
			<div className='resume__skils'>
				<div className='resume__skils__block'>
					<h5 className='resume__skils__block__title'>
						Work Skills
					</h5>
					<div className='resume__skils__block__main'>
						{skilsArray.map((item, index) => (
							<SkilsItem key={index}>{item}</SkilsItem>
						))}
					</div>
				</div>
				<div className='resume__skils__block'>
					<h5 className='resume__skils__block__title'>
						Soft Skills
					</h5>
					<div className='resume__skils__block__main'>
						{softSkilsArray.map((item, index) => (
							<SkilsItem key={index}>{item}</SkilsItem>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Resume