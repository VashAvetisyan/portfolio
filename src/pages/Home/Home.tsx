import Title from "../../components/Title/Title";
// import SecondTitle from "../../components/SecondTitle/SecondTitle";
// import HomeInfoItem from "../../components/HomeInfoItem/HomeInfoItem";

// import codeSvg from "../../assets/codeSvg.svg"

import './Home.scss'

const Home = () => {
	// const HomeInfoArray = [
	// 	{
	// 		icon: codeSvg,
	// 		title: 'Web Development',
	// 		text: `As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications.`
	// 	},
	// 	{
	// 		icon: codeSvg,
	// 		title: 'Web Development',
	// 		text: `As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications.`
	// 	},
	// 	{
	// 		icon: codeSvg,
	// 		title: 'Web Development',
	// 		text: `As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications.`
	// 	},
	// 	{
	// 		icon: codeSvg,
	// 		title: 'Web Development',
	// 		text: `As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications.`
	// 	}
	// ]

	return (
		<div className="app-home">
			<Title>About Me</Title>
			<p className="app-home__text">
				I am a 21-year-old Front-End Developer from Vashington. I am currently a second-year student of Informatics and Applied Mathematics at Yerevan State University. I am motivated to work in the IT industry and continuously improve my technical skills by learning new technologies.
			</p>
			{/* <SecondTitle>What i do!</SecondTitle>
			<div className="app-home__mainInfo">
				{HomeInfoArray.map((item, index) => (
					<HomeInfoItem icon={item.icon} text={item.text} title={item.title} key={index}/>
				))}
			</div> */}
		</div>
	);
}

export default Home;