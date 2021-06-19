import ProjectDetails from "../components/ProjectDetails";
import chessImage from "../public/images/chess-cover.webp";
import React, { useState } from "react";
import Head from "next/head";

const Chess = () => {
	const [languages] = useState([
		'Angular (front-end, PWA)',
		'TypeScript (front-end logic)',
		'SASS (stylesheets)',
		'C#/ASP.NET Core (API)',
		'SignalR (messaging)',
		'Cloud Infrastructure - Google Cloud + Digital Ocean',
		'Docker (deployment)',
		'MySql (database)',
	]);

	return <>
		<Head>
			<title>Chess - Matt Winfield</title>
		</Head>
		<ProjectDetails title="Chess" languagesAndTechnologies={languages} codeLink='https://github.com/matt-winfield-chess' demoLink='https://chess.matt-winfield.com' image={chessImage} imageAlt="Chess project cover image">
			<p>
				This project was developed as part of my third year dissertation for University. It is a
				three tier web application which supports chess games played online between two people, single
				player games against the computer offline, and offline multiplayer functionality. It is
				implemented as a PWA which allows for functionality without internet connection (including
				playing against the computer).
			</p>
			<p>
				This project allowed me to expand and apply my knowledge with technologies such as SignalR, cloud
				computing and development of PWAs. This project also provided an opportunity to practice
				and develop my existing skills with ASP.NET web api development, database design and front-end
				web development.
			</p>
		</ProjectDetails>
	</>
}

export default Chess;