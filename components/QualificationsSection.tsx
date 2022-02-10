import { down, up } from "styled-breakpoints";
import styled from 'styled-components';
import Section from "./Section";

const List = styled.div`
	margin: 0 50px;
	width: 80%;

	${down('sm')} {
		margin: 10px 0;
		text-align: left;
		padding: 10px 15px;
	}

	${up('md')} {
		font-size: 25px;
	}
`

const QualificationsSection = () => {
	return (
		<Section title="Qualifications" id="qualifications">
			<List>
				<ul>
					<li>First Class Honours BSc Digital and Technology Solutions (Software Engineering) - University of Essex</li>
					<li>A-Level Computer Science (A) - Kesgrave High School</li>
					<li>A-Level Mathematics (B) - Kesgrave High School</li>
					<li>A-Level Physics (B) - Kesgrave High School</li>
					<li>BTEC Engineering (Distinction*) - Kesgrave High School</li>
				</ul>
			</List>
		</Section>
	);
};

export default QualificationsSection;