import { Card } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/CodeRounded";
import PlayIcon from "@material-ui/icons/PlayArrowRounded";
import Image, { StaticImageData } from 'next/image';
import { FunctionComponent } from "react";
import { down, up } from "styled-breakpoints";
import { useBreakpoint } from "styled-breakpoints/react-styled";
import styled, { css } from "styled-components";
import { heightAspectRatio } from "../utils/next-image-utils";
import Layout from "./Layout";
import ProjectButton from "./ProjectButton";

type ProjectDetailsProps = {
	title: string
	image?: StaticImageData;
	imageAlt?: string;
	languagesAndTechnologies?: string[];
	codeLink?: string;
	demoLink?: string;
}

const Summary = styled.div`
	display: flex;
	margin: 0 20px 0 40px;

	${down('sm')} {
		flex-direction: column-reverse;
	}
`

const Buttons = styled.div`
	margin-left: 50px;

	${down('sm')} {
		margin: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

const ImageContainer = styled.div`
	flex-shrink: 0;
	align-self: center;
`

const ProjectDetails: FunctionComponent<ProjectDetailsProps> = (props) => {
	const imageHeight = useBreakpoint(up('md')) ? 200 : 250;

	return <Layout>
		<Card css={css`
			padding: 10px;
			margin: 10px;
			color: ${props => props.theme.palette.text.primary};
			background-color: ${props => props.theme.palette.background.default};
		`}>
			<h1 css={`
				margin: 20px;
				${down('sm')} {
					text-align: center;
				}
			`}>{props.title}</h1>
			<Summary>
				<div css='margin-right: 20px'>
					{props.children}
				</div>
				{props.image &&
					<ImageContainer>
						<Image src={props.image} alt={props.imageAlt ?? ''} {...heightAspectRatio(props.image, imageHeight)} />
					</ImageContainer>
				}
			</Summary>
			{props.languagesAndTechnologies &&
				<>
					<h2 css='margin: 10px 20px'>Languages and Technologies</h2>
					<ul css='margin: 10px 50px'>
						{props.languagesAndTechnologies.map((value, index) => <li key={index}>{value}</li>)}
					</ul>
				</>
			}
			<Buttons>
				{props.codeLink &&
					<ProjectButton variant="contained" href={props.codeLink}
						startIcon={<CodeIcon></CodeIcon>}>Code</ProjectButton>
				}
				{props.demoLink &&
					<ProjectButton variant="contained" href={props.demoLink}
						startIcon={<PlayIcon></PlayIcon>}>Demo</ProjectButton>
				}
			</Buttons>
		</Card>
	</Layout>
}

export default ProjectDetails;