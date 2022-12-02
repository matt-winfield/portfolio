import CodeIcon from "@material-ui/icons/CodeRounded";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import PlayIcon from "@material-ui/icons/PlayArrowRounded";
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { transparentize } from 'polished';
import { forwardRef, useEffect, useState } from 'react';
import { down, up } from 'styled-breakpoints';
import { useBreakpoint } from 'styled-breakpoints/react-styled';
import styled from 'styled-components';
import { heightAspectRatio } from '../../utils/next-image-utils';
import { ProjectDetails } from './ProjectDetails';

const Container = styled(motion.div)`
    min-width: 200px;
    max-width: 400px;
    position: relative;
    overflow: hidden;
`

const Title = styled(motion.h1)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${props => transparentize(0.1, props.theme.palette.heading.background)};
    padding: 10px;
    text-align: center;

    ${down('sm')} {
        font-size: 18px;
    }
`

const ImageContainer = styled(motion.div)`
    height: 100%;
`

const CoverImage = styled(Image)`
    background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
    object-fit: contain;
    object-position: center;
    width: 100%;
    height: 100%;
`

const Buttons = styled(motion.div)`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
    padding: 20px;

    ${down('sm')} {
        padding: 2px;
        gap: 2px;
        font-size: 12px;
    }
`

const ButtonRow = styled(motion.div)`
    display: flex;
    gap: 10px;
    justify-content: stretch;
`

const ButtonLink = styled(Link)`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: ${props => transparentize(0.1, props.theme.palette.heading.background)};
    color: ${props => props.theme.palette.text.primary};
    text-decoration: none;
`

const ButtonLinkText = styled.span`
    margin-left: 10px;
`

interface ProjectProps {
    project: ProjectDetails;
}

const titleVariants = {
    normal: {
        scale: 1
    },
    hover: {
        scale: 1.1
    }
}

const imageVariants = {
    normal: {
        scale: 1,
        opacity: 1
    },
    hover: {
        scale: 1.1,
        opacity: 0.5
    }
}

const getButtonVariants = (isDesktop: boolean | null) => {
    return isDesktop ? {
        normal: {
            opacity: 0,
        },
        hover: {
            opacity: 1
        }
    } : {
        normal: {
            opacity: 1,
        },
        hover: {
            opacity: 1
        }
    }
}

export const Project = forwardRef<HTMLDivElement, ProjectProps>(({ project }, ref) => {
    const animateControls = useAnimation();
    const isDesktop = useBreakpoint(up('md'));
    const [isHovered, setIsHovered] = useState(false);
    const height = isDesktop ? 400 : 200;

    const buttonsVariants = getButtonVariants(isDesktop);

    useEffect(() => {
        if (isHovered) {
            animateControls.start('hover');
            return;
        }

        animateControls.start('normal');
    }, [isDesktop, isHovered])

    return (
        <Container initial='normal' whileHover='hover' ref={ref} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
            <ImageContainer variants={imageVariants}>
                <CoverImage src={project.image} alt="" {...heightAspectRatio(project.image, height)} placeholder="blur" />
            </ImageContainer>
            <Title variants={titleVariants}>
                {project.title}
            </Title>
            {
                (project.codeLink !== undefined || project.demoLink !== undefined || project.detailsLink !== undefined) && (
                    <Buttons variants={buttonsVariants} animate={animateControls}>
                        <ButtonRow>
                            {project.detailsLink !== undefined && <ButtonLink href={project.detailsLink}><InfoIcon /><ButtonLinkText>Details</ButtonLinkText></ButtonLink>}
                        </ButtonRow>
                        <ButtonRow>
                            {project.codeLink !== undefined && <ButtonLink href={project.codeLink}><CodeIcon /><ButtonLinkText>Code</ButtonLinkText></ButtonLink>}
                            {project.demoLink !== undefined && <ButtonLink href={project.demoLink}><PlayIcon /><ButtonLinkText>Demo</ButtonLinkText></ButtonLink>}
                        </ButtonRow>
                    </Buttons>
                )
            }
        </Container>
    )
})
Project.displayName = 'Project';