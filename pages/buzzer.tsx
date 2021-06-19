import Head from 'next/head';
import { useState } from "react";
import ProjectDetails from "../components/ProjectDetails";
import buzzerImage from "../public/images/buzzer-cover.webp";

const Buzzer = () => {
	const [languages] = useState([
		'Angular (front-end)',
		'TypeScript (front-end logic)',
		'SASS (stylesheets)',
		'C#/ASP.NET Core (API)',
		'SignalR (messaging)',
	]);

	return <>
		<Head>
			<title>Lockdown Quiz Buzzer - Matt Winfield</title>
		</Head>
		<ProjectDetails title="Lockdown Quiz Buzzer" image={buzzerImage} imageAlt="Buzzer project cover image" languagesAndTechnologies={languages} codeLink="https://github.com/matt-winfield-quiz" demoLink="https://quiz.matt-winfield.com">
			<p>
				During the COVID-19 lockdown, me and my friends would meet up on video calls and play
				various online games together. We organised a virtual quiz, and needed some way of
				working out who answered first. This was the inspiration behind creating this buzzer system,
				which would allow people to &quot;buzz in&quot; as soon as they knew the answer the the question.
			</p>
			<p>
				I only had a few days to implement the system, so some shortcuts were taken. One example of
				this is that all storage on the API is done in-memory (instead of using a database) as this
				was significantly faster to implement, at the cost of scalability. This decision was worth it
				though, as this system was only intended to be used by a handful of users at a time.
			</p>
			<p>
				The core requirements for this system were for it to be simple to invite players to a room,
				intuitive to use, record and display the order that players buzzed in as well as the
				time difference between them, and the creator of the room can add and remove points
				from players depending on if they got the answer correct.
			</p>
			<p>
				An extra feature that would be useful to add that was found from using the system during a
				lockdown quiz is to introduce a customisable time limit after the user presses the buzzer
				in which they must answer, to prevent buzzing before the player knows the answer.
			</p>
		</ProjectDetails>
	</>
}

export default Buzzer;