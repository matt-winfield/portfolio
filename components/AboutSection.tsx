import { down, up } from "styled-breakpoints";
import styled from "styled-components";
import profilePicture from "../public/images/profile-picture.webp";
import Section from "./Section";

const Text = styled.div`
	margin: 20px 50px;
	width: 80%;

	${down('sm')} {
		margin: 10px 0;
		width: 100%;
		padding: 10px;
	}

	${up('md')} {
		font-size: 25px;
	}
`

const AboutSection = () => {
	return (
		<Section title="About Me" id="about" image={profilePicture} imageAlt="Me">
			<Text>
				<p>
					My name is Matt Winfield, I&apos;m a Software Developer currently working at Derivco Sports.
				</p>
				<p>
					I have a full-stack skill-set, with skills in front-end, API and database technologies.
				</p>
				<p>
					My favourite languages/frameworks to use are Angular or React with TypeScript for front-end,
					C# (ASP.NET) for API development and relational databases for backend, but I have knowledge
					of many others and am able to learn new tools quickly.
				</p>
			</Text>
		</Section>
	);
};

export default AboutSection;