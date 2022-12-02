import Head from "next/head";
import ExperienceSection from "../components/ExperienceSection";
import { Hero } from '../components/Hero';
import Layout from "../components/Layout";
import ProjectsSection from "../components/ProjectsSection";
import QualificationsSection from "../components/QualificationsSection";
import { SkillsSection } from '../components/SkillsSection';

const Home = () => {
	return (<>
		<Head>
			<title>Matt Winfield - Digital Portfolio</title>
		</Head>
		<Layout>
			<Hero />
			<ProjectsSection />
			<SkillsSection />
			<ExperienceSection />
			<QualificationsSection />
		</Layout>
	</>)
}

export default Home;