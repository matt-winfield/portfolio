import { motion } from 'framer-motion';
import { useState } from "react";
import styled from 'styled-components';
import quizBuzzerImage from "../public/images/buzzer-cover.webp";
import chessImage from "../public/images/chess-cover.webp";
import portfolioImage from "../public/images/portfolio-cover.png";
import raytracingImage from "../public/images/raytracing-cover.webp";
import { Project } from './projects/Project';
import { ProjectDetails } from "./projects/ProjectDetails";
import Section from "./Section";

const ScrollContainer = styled.div`
	width: 100%;
	overflow-x: auto;
`

const FlexContainer = styled(motion.div)`
	display: flex;
	flex-direction: row;
	align-items: stretch;
	justify-content: space-around;
	width: fit-content;
	min-width: 100%;
	gap: 20px;
`

const AnimatedProject = motion(Project);

const projectsVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.05
		},
	}
}

const projectsElementVariants = {
	hidden: {
		opacity: 0
	},
	visible: {
		opacity: 1
	}
}

const ProjectsSection = () => {
	const [projects] = useState([
		new ProjectDetails('Chess', chessImage, '/chess', 'https://github.com/matt-winfield-chess'),
		new ProjectDetails('2D Ray Tracing', raytracingImage, '/raytracing', 'https://github.com/matt-winfield/raytracing', 'https://raytracing.matt-winfield.com/'),
		new ProjectDetails('Digital Portfolio', portfolioImage, '/portfolio', 'https://github.com/matt-winfield/portfolio', 'https://www.matt-winfield.com/'),
		new ProjectDetails('Lockdown Quiz Buzzer', quizBuzzerImage, '/buzzer', 'https://github.com/matt-winfield-quiz'),
	]);

	return (
		<Section title="My Projects">
			<ScrollContainer>
				<FlexContainer initial='hidden' whileInView='visible' variants={projectsVariants}>
					{
						projects.map((project, index) => (
							<AnimatedProject project={project} key={index} variants={projectsElementVariants} />
						))
					}
				</FlexContainer>
			</ScrollContainer>
		</Section>
	);
};

export default ProjectsSection;