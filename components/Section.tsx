import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { FunctionComponent } from "react";
import { down, up } from "styled-breakpoints";
import { useBreakpoint } from 'styled-breakpoints/react-styled';
import styled from 'styled-components';
import { widthAspectRatio } from "../utils/next-image-utils";

type SectionProps = {
	title: string,
	image?: StaticImageData,
	imageAlt?: string
}

const Container = styled.div`
	width: 100%;
	padding: 10px;

	${up('md')} {
		margin-top: 150px;
		margin-bottom: 100px;
		padding: 10px 100px;
	}
`

const Heading = styled(motion.h1)`
	${up('md')} {
		display: inline-block;
		font-size: 62px;
		font-weight: bold;
		border-bottom: 2px solid ${props => props.theme.palette.secondary.main};
	}

	${down('sm')} {
		text-align: center;
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
	padding: 10px;

	${down('sm')} {
		flex-direction: column-reverse;
	}

	${up('md')} {
		padding: 50px 20px 0;
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
			<Content>
				<Heading initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }}>{props.title}</Heading>
				<Body>
					{props.children}
					{props.image &&
						<ImageContainer>
							<Image src={props.image} alt={props.imageAlt ?? ''} {...widthAspectRatio(props.image, imageWidth)} />
						</ImageContainer>
					}
				</Body>
			</Content>
		</Container>
	)
}

export default Section;