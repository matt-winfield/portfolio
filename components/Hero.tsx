import { motion } from 'framer-motion';
import { SiCsharp, SiNextdotjs, SiReact } from 'react-icons/si';
import { down, up } from 'styled-breakpoints';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    z-index: 0;
	color: ${props => props.theme.palette.text.primary};

    ${down('sm')} {
        justify-content: center;
        align-items: stretch;
        flex-direction: column;
    }
`

const Background = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: radial-gradient(
        at 10% 80%,
        ${props => props.theme.palette.secondary.main},
        transparent 70%
    ), radial-gradient(
        at 10% 20%,
        ${props => props.theme.palette.secondary.alternate},
        transparent 70%
    );
    background-color: ${props => props.theme.palette.background.default};
    z-index: -1;

    ${down('sm')} {
        background: radial-gradient(
            at 10% 80%,
            ${props => props.theme.palette.secondary.main},
            transparent 80%
        ), radial-gradient(
            at 10% 20%,
            ${props => props.theme.palette.secondary.alternate},
            transparent 80%
        );
    }
`

const HeroText = styled.div`
    padding: 20px;
    margin-left: 150px;
    flex-grow: 1;
    overflow: hidden;

    ${down('md')} {
        margin-left: 0;
    }

    ${down('sm')} {
        margin-left: 0;
        margin-top: 100px;
    }
`

const Title = styled(motion.h1)`
    font-size: 70px;
    font-family: 'Arimo', sans-serif;
    margin: 0;

    ${down('sm')} {
        text-align: center;
    }
`

const Subtitle = styled(motion.h2)`
    font-size: 32px;
    margin: 0;

    ${down('sm')} {
        text-align: center;
    }
`

const Skills = styled(motion.div)`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-right: 100px;
    gap: 20px;
    font-size: 24px;

    ${down('md')} {
        margin-right: 0;
    }

    ${down('sm')} {
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 100px;
        gap: 0;
        font-size: 20px
    }

    ${up('xxl')} {
        margin-right: 200px;
    }
`

const Skill = styled(motion.div)`
    cursor: default;
    display: flex;
    align-items: center;
    gap: 5px;
`

const skillsVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        },
    }
}

const skillVariants = {
    hidden: {
        opacity: 0,
        scale: 0.5,
        y: 20,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
    }
}

export const Hero = () => {
    return (
        <Container>
            <Background initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} />
            <HeroText>
                <Title initial={{ x: '-80%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4, type: 'spring' }}>Matt Winfield</Title>
                <Subtitle initial={{ x: '-80%', opacity: 0 }} animate={{ x: 0, opacity: 0.8 }} transition={{ delay: 0.2, duration: 0.4, type: 'spring' }}>Software Developer</Subtitle>
            </HeroText>
            <Skills initial='hidden' animate='visible' variants={skillsVariants}>
                <Skill whileHover={{ scale: 1.2 }} animate={{ scale: 1 }} variants={skillVariants}><SiReact /> React</Skill>
                <Skill whileHover={{ scale: 1.2 }} animate={{ scale: 1 }} variants={skillVariants}><SiNextdotjs /> Next.js</Skill>
                <Skill whileHover={{ scale: 1.2 }} animate={{ scale: 1 }} variants={skillVariants}><SiCsharp /> C#</Skill>
            </Skills>
        </Container>
    );
};