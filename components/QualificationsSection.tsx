import { motion } from 'framer-motion';
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

const StyledUl = styled(motion.ul)`
	margin: 0;
`;

const listVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.1,
			duration: 0.2
		},
	}
}

const listElementVariants = {
	hidden: {
		opacity: 0,
		x: -50,
	},
	visible: {
		opacity: 1,
		x: 0
	}
}

const QualificationsSection = () => {
	return (
		<Section title="My Qualifications">
			<List>
				<StyledUl initial='hidden' whileInView='visible' variants={listVariants}>
					<motion.li variants={listElementVariants}>First Class Honours BSc Digital and Technology Solutions (Software Engineering) - University of Essex</motion.li>
					<motion.li variants={listElementVariants}>A-Level Computer Science (A) - Kesgrave High School</motion.li>
					<motion.li variants={listElementVariants}>A-Level Mathematics (B) - Kesgrave High School</motion.li>
					<motion.li variants={listElementVariants}>A-Level Physics (B) - Kesgrave High School</motion.li>
					<motion.li variants={listElementVariants}>BTEC Engineering (Distinction*) - Kesgrave High School</motion.li>
				</StyledUl>
			</List>
		</Section>
	);
};

export default QualificationsSection;