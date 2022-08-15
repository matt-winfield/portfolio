import Head from "next/head";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import Layout from "../components/Layout";
import ProjectsSection from "../components/ProjectsSection";
import QualificationsSection from "../components/QualificationsSection";

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