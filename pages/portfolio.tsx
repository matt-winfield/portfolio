import React, { useState } from "react";
import ProjectDetails from "../components/ProjectDetails";
import portfolioImage from "../public/images/portfolio-cover.png";
import Head from 'next/head';

const Portfolio = () => {
	const [languages] = useState([
		'React',
		'TypeScript',
		'Next.js',
		'styled-components'
	]);

	return <>
		<Head>
			<title>Digital Portfolio Project - Matt Winfield</title>
		</Head>
		<ProjectDetails title="Digital Portfolio Project" languagesAndTechnologies={languages} codeLink='https://github.com/matt-winfield/matt-winfield.github.io' demoLink='https://www.matt-winfield.com' image={portfolioImage} imageAlt="Portfolio project cover image">
			<p>
				The aim of the portfolio project was to produce a portfolio (the one you are currently looking at!) to present recruiters with a summary of me and my skills,
				and provide an easy place to find my other projects and examples of my code. It can also serve as a demonstration of my ability to create a simple website.
			</p>
			<p>
				The criteria for the portfolio was to be simple and easy to read, with a professional appearance to set a good first impression.
				The project was originally developed without any framework when it was simpler, but later converted to React to make it easier to maintain.
			</p>
		</ProjectDetails>
	</>
}

export default Portfolio;