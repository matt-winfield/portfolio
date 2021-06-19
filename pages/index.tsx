import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import QualificationsSection from "../components/QualificationsSection";
import Layout from "../components/Layout";
import React from "react";
import Head from "next/head";

const Home = () => {
	return (<>
		<Head>
			<title>Matt Winfield - Digital Portfolio</title>
		</Head>
		<Layout>
			<AboutSection />
			<ProjectsSection />
			<ExperienceSection />
			<QualificationsSection />
		</Layout>
	</>)
}

export default Home;