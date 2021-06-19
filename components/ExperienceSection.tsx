import Section from "./Section";
import styled from 'styled-components';
import { up, down } from "styled-breakpoints";

const List = styled.div`
	margin: 0 50px;
	width: 80%;

	${down('sm')} {
		margin: 10px 0;
		text-align: left;
		padding: 10px 50px;
	}

	${up('md')} {
		font-size: 25px
	}
`

const ExperienceSection = () => {
	return (
		<Section title="Experience" id="experience">
			<List>
				<ul>
					<li>Apprentice Software Developer - Derivco Sports (2 years, current)</li>
					<li>Software development internship - Derivco Sports (6 weeks, 2017)</li>
				</ul>
			</List>
		</Section>
	);
};

export default ExperienceSection;