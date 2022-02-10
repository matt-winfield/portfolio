import { useState } from "react";
import styled from 'styled-components';
import quizBuzzerImage from "../public/images/buzzer-cover.webp";
import chessImage from "../public/images/chess-cover.webp";
import portfolioImage from "../public/images/portfolio-cover.png";
import raytracingImage from "../public/images/raytracing-cover.webp";
import Carousel from "./Carousel/Carousel";
import CarouselItem from "./Carousel/CarouselItem";
import Section from "./Section";

const Container = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`

const ProjectsSection = () => {
	const [projects] = useState([
		new CarouselItem('Chess', chessImage, '/chess', 'https://github.com/matt-winfield-chess'),
		new CarouselItem('2D Ray Tracing', raytracingImage, '/raytracing', 'https://github.com/matt-winfield/raytracing', 'https://raytracing.matt-winfield.com/'),
		new CarouselItem('Digital Portfolio', portfolioImage, '/portfolio', 'https://github.com/matt-winfield/portfolio', 'https://www.matt-winfield.com/'),
		new CarouselItem('Lockdown Quiz Buzzer', quizBuzzerImage, '/buzzer', 'https://github.com/matt-winfield-quiz'),
	]);

	return (
		<Section title="Projects" id="projects">
			<Container>
				<Carousel items={projects}></Carousel>
			</Container>
		</Section>
	);
};

export default ProjectsSection;