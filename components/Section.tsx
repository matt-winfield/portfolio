import { FunctionComponent } from "react";
import styled, { useTheme } from 'styled-components';
import { down, up } from "styled-breakpoints";
import Image from 'next/image';
import { useBreakpoint } from 'styled-breakpoints/react-styled';
import { widthAspectRatio } from "../utils/next-image-utils";

type SectionProps = {
	title: string,
	id: string,
	image?: StaticImageData,
	imageAlt?: string
}

const Container = styled.div`
	width: 95%;
	padding: 10px;
	margin: 7px;
	box-sizing: border-box;
	border: 1px solid ${props => props.theme.palette.border.main};
	position: relative;
	border-radius: 10px;
	background-color: ${props => props.theme.palette.background.default};

	${down('sm')} {
		margin: 20px auto;
		text-align: center;
	}

	${up('md')} {
		height: calc(100% - 14px);
		width: calc(100% - 14px);
		padding: 50px;
		display: flex;
		align-items: center;
	}
`

const Anchor = styled.div`
	position: absolute;
	top: -7px;
	visibility: hidden;
`

const Heading = styled.h1`
	${up('md')} {
		display: inline-block;
		font-size: 62px;
		font-weight: bold;
		border-bottom: 2px solid ${props => props.theme.palette.secondary.main};
		position: absolute;
		top: -100px;
	}
`

const Content = styled.div`
	width: 100%;
	color: ${props => props.theme.palette.text.primary};

	${up('md')} {
		position: relative;
	}
`

const Body = styled.div`
	display: flex;
	align-items: center;

	${down('sm')} {
		flex-direction: column-reverse;
	}
`

const ImageContainer = styled.div`
	border-radius: 10px;
	border: 1px solid ${props => props.theme.palette.border.main};
	overflow: hidden;

	& > * {
		vertical-align: top;
	}
`;

const Section: FunctionComponent<SectionProps> = (props) => {
	const imageWidth = useBreakpoint(up('md')) ? 250 : 200;

	return (
		<Container>
			<Anchor id={props.id}></Anchor>
			<Content>
				<Heading>{props.title}</Heading>
				<Body>
					{props.children}
					{props.image &&
						<ImageContainer>
							<Image src={props.image} alt={props.imageAlt} {...widthAspectRatio(props.image, imageWidth)} />
						</ImageContainer>
					}
				</Body>
			</Content>
		</Container>
	)
}

export default Section;