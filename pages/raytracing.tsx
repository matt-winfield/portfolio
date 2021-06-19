import ProjectDetails from "../components/ProjectDetails";
import raytracingImage from "../public/images/raytracing-cover.webp";
import { useState } from "react";
import Head from 'next/head';

const Raytracing = () => {
	const [languages] = useState([
		'React',
		'TypeScript',
	]);

	return <>
		<Head>
			<title>Ray Tracing - Matt Winfield</title>
		</Head>
		<ProjectDetails title="Ray Tracing" languagesAndTechnologies={languages} codeLink='https://github.com/matt-winfield/raytracing' demoLink='https://raytracing.matt-winfield.com' image={raytracingImage} imageAlt="Raytracing project cover image">
			<p>
				This project was an expiriment with 2d ray tracing to produce a 3d environment. The user can move and rotate the camera through
				a &quot;3D&quot; environment generated from a 2D map of walls.
			</p>
			<p>
				The project is developed in React. Rays are cast from a camera in 2D, and then the distance of the ray to the nearest wall is
				used to calculate the displayed height and brightness. This is a technique similar to that used early 3D games such as &quot;Wolfenstein 3D&quot;.
			</p>
		</ProjectDetails>
	</>
}

export default Raytracing;