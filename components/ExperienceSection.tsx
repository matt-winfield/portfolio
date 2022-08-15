import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';
import { down, up } from "styled-breakpoints";
import styled from 'styled-components';
import Section from "./Section";

const List = styled.div`
	margin: 0 50px;

	${down('sm')} {
		margin: 10px 0;
		text-align: center;
		padding: 10px 0;
	}

	${up('md')} {
		font-size: 25px;
		width: 80%;
	}
`

const StyledUl = styled.ul`
	${down('sm')} {
		list-style-type: none;
		padding-inline-start: 0;
	}
`

const EmploymentTimePeriod = styled.span`
	color: ${props => props.theme.palette.text.light};
	padding-left: 10px;
	font-style: italic;
	font-size: 15px;

	${up('md')} {
		font-size: 18px
	}

	${down('sm')} {
		display: block;
		padding: 3px 0 8px;
	}
`

const EmploymentDuration = styled.span`
	padding-left: 5px;

	${down('sm')} {
		display: block;
		padding: 0;
		font-size: 13px;
	}
`

const startDate = DateTime.fromISO('2022-05-19T08:20:00');

const getFormattedDate = (): string => {
	const nowSeconds = Math.floor(DateTime.now().toSeconds());
	const duration = DateTime.fromSeconds(nowSeconds).diff(startDate, ['years', 'months', 'days', 'hours', 'minutes', 'seconds'])
	return duration.toHuman({ maximumFractionDigits: 0, unitDisplay: 'short' });
}

const ExperienceSection = () => {
	const [formattedEmploymentDuration, setFormattedEmploymentDuration] = useState(getFormattedDate());

	useEffect(() => {
		const timeout = setInterval(() => {
			setFormattedEmploymentDuration(getFormattedDate());
		}, 1000)

		return () => {
			clearTimeout(timeout);
		}
	}, [])

	return (
		<Section title="Experience" id="experience">
			<List>
				<StyledUl>
					<li>L2 Software Developer - Derivco Sports <EmploymentTimePeriod>2022 - now <EmploymentDuration>({formattedEmploymentDuration})</EmploymentDuration></EmploymentTimePeriod></li>
					<li>L1 Software Developer - Derivco Sports <EmploymentTimePeriod>2021 - 2022 <EmploymentDuration>(1 year)</EmploymentDuration></EmploymentTimePeriod></li>
					<li>Apprentice Software Developer - Derivco Sports <EmploymentTimePeriod>2018 - 2021 <EmploymentDuration>(3 years)</EmploymentDuration></EmploymentTimePeriod></li>
					<li>Software development internship - Derivco Sports <EmploymentTimePeriod>2017 <EmploymentDuration>(6 weeks)</EmploymentDuration></EmploymentTimePeriod></li>
				</StyledUl>
			</List>
		</Section>
	);
};

export default ExperienceSection;