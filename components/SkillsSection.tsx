import { motion } from 'framer-motion';
import { SiCsharp, SiCss3, SiDocker, SiDotnet, SiGit, SiHtml5, SiJavascript, SiNextdotjs, SiPostgresql, SiReact, SiRedux, SiReduxsaga, SiTypescript } from 'react-icons/si';
import { down } from 'styled-breakpoints';
import styled from 'styled-components';
import Section from './Section';

const Container = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    font-size: 1.5rem;

    ${down('md')} {
        font-size: 1rem;
    }
`

const Row = styled(motion.div)`
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: center;

    ${down('md')} {
        gap: 20px;
    }
`

const Skill = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 10px;
    text-align: center;
`

const Highlight = styled.span`
    color: ${props => props.theme.palette.secondary.main};
`

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    }
}

const skillVariants = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
    }
}


export const SkillsSection = () => {
    return (
        <Section title='My Skills'>
            <Container initial='hidden' whileInView='visible' variants={containerVariants}>
                <Row>
                    <Skill variants={skillVariants}><Highlight><SiTypescript /></Highlight> TypeScript</Skill>
                    <Skill variants={skillVariants}><Highlight><SiReact /></Highlight> React</Skill>
                    <Skill variants={skillVariants}><Highlight><SiNextdotjs /></Highlight> Next.js</Skill>
                    <Skill variants={skillVariants}><Highlight><SiCsharp /></Highlight> C#</Skill>
                </Row>
                <Row>
                    <Skill variants={skillVariants}><Highlight><SiRedux /></Highlight>Redux</Skill>
                    <Skill variants={skillVariants}><Highlight><SiReduxsaga /></Highlight> Redux Saga</Skill>
                    <Skill variants={skillVariants}><Highlight><SiDotnet /></Highlight>ASP.NET Core</Skill>
                </Row>
                <Row>
                    <Skill variants={skillVariants}><Highlight><SiHtml5 /><SiCss3 /><SiJavascript /></Highlight>HTML, CSS, JavaScript</Skill>
                    <Skill variants={skillVariants}><Highlight><SiGit /></Highlight> Git</Skill>
                    <Skill variants={skillVariants}><Highlight><SiPostgresql /></Highlight> SQL</Skill>
                    <Skill variants={skillVariants}><Highlight><SiDocker /></Highlight> Docker</Skill>
                </Row>
            </Container>
        </Section>
    )
}