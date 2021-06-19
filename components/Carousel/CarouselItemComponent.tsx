import { FunctionComponent } from "react"
import CarouselItem from "./CarouselItem"
import ProjectButton from "../ProjectButton";
import CodeIcon from "@material-ui/icons/CodeRounded";
import PlayIcon from "@material-ui/icons/PlayArrowRounded";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import styled, { css } from 'styled-components';
import { createTransitions } from "../../utils/styled-transitions";
import { down, up } from "styled-breakpoints";
import { transparentize } from "polished";
import { useRouter } from "next/dist/client/router";
import Image from 'next/image';
import { useBreakpoint } from "styled-breakpoints/react-styled";
import { heightAspectRatio } from "../../utils/next-image-utils";

type CarouselItemProps = {
	item: CarouselItem;
}

const Title = styled.div`
	position: absolute;
	width: 100%;
	background-color: ${props => props.theme.palette.heading.background};
	color: ${props => props.theme.palette.text.secondary};
	margin: 0;
	padding: 10px;
	z-index: 1;

	${up('md')} {
		background-color: ${props => transparentize(0.1, props.theme.palette.heading.background)};
		padding: 20px;
		font-size: 150%;
		transition: ${createTransitions('all')};
	}
`

const CoverImage = styled(Image)`
	height: 250px;
	margin: 0 auto;
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;

	${up('md')} {
		height: 400px;
		transition: ${createTransitions('all')}
	}
`

const Buttons = styled.div`
	width: 100%;
	position: absolute;
	justify-content: center;

	${down('sm')} {
		bottom: 0;
		background-color: ${props => transparentize(0.2, props.theme.palette.background.variant)};
		font-size: 90%;
	}

	${up('md')} {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		visibility: hidden;
		opacity: 0;
		transition: ${createTransitions('opacity')};
	}
`

const Item = styled.div<{ active?: boolean, previous?: boolean, next?: boolean }>`
	display: inline-block;
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
	pointer-events: none;
	border-radius: 10px;
	background-color: ${props => props.theme.palette.background.variant};
	text-align: center;
	height: auto;
	overflow: hidden;
	min-height: 400px;
	transition: ${props => createTransitions(['all'], props.theme.transitions.duration.complex)};

	${down('sm')} {
		min-height: 250px;
	}

	${up('md')} {
		&:hover {
			${Title} {
				transform: scale(1.2);
			}

			${CoverImage} {
				opacity: 0.3;
				transform: scale(1.1);
			}

			${Buttons} {
				visibility: visible;
				opacity: 0.8;
			}
		}
	}

	${props => props.active && css`
		opacity: 1;
		position: relative;
		z-index: 900;
		pointer-events: all;
	`}

	${props => props.previous && css`
		z-index: 800;
		transform: translateX(-100%);
	`}

	${props => props.next && css`
		z-index: 800;
		transform: translateX(100%);
	`}
`

const Row = styled.div`
	display: flex;

	${down('sm')} {
		margin: 5px 0;
	}
`

const Button = styled(ProjectButton)`
	width: 100%;
	text-transform: none;

	${down('sm')} {
		margin: 0 5px;
	}
`

const CarouselItemComponent: FunctionComponent<CarouselItemProps> = (props) => {
	const router = useRouter();
	const height = useBreakpoint(up('md')) ? 400 : 200;

	const onDetailsLinkClicked = () => {
		if (props.item.detailsLink) {
			router.push(props.item.detailsLink);
		}
	}

	return <>
		<Item active={props.item.active} next={props.item.isNext} previous={props.item.isPrevious}>
			<Title>{props.item.title}</Title>
			<CoverImage src={props.item.image} alt="" {...heightAspectRatio(props.item.image, height)}></CoverImage>
			<Buttons>
				<Row>
					{props.item.detailsLink &&
						<Button variant="contained" onClick={onDetailsLinkClicked}
							startIcon={<InfoIcon fontSize="large"></InfoIcon>}>Details</Button>
					}
				</Row>
				<Row>
					{props.item.codeLink &&
						<Button variant="contained" href={props.item.codeLink}
							startIcon={<CodeIcon fontSize="large"></CodeIcon>}>Code</Button>
					}
					{props.item.demoLink &&
						<Button variant="contained" href={props.item.demoLink}
							startIcon={<PlayIcon fontSize="large"></PlayIcon>}>Demo</Button>
					}
				</Row>
			</Buttons>
		</Item>
	</>
}

export default CarouselItemComponent;