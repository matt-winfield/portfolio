import { useCallback, useState } from 'react';
import Link from 'next/link';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ThemeToggle from './ThemeToggle';
import styled, { css } from 'styled-components';
import 'styled-components/macro';
import { down, up } from 'styled-breakpoints';
import { createTransitions } from '../utils/styled-transitions';
import { readableColor } from 'polished';
import { useRouter } from 'next/dist/client/router';

const HomeButton = styled.div`
	color: ${props => props.theme.palette.text.secondary};
	display: inline-flex;
	flex-direction: column;
	align-items: flex-end;
	cursor: pointer;

	${down('sm')} {
		flex-grow: 1;
		align-items: center;
	}
`

const Heading = styled.div`
	display: inline-block;
	font-size: 300%;
	border-bottom: 1px solid ${props => props.theme.palette.secondary.main};
	margin: 1px 5px;

	${down('xs')} {
		font-size: 200%;
	}
`

const MenuContent = styled.div`
	display: inline-flex;
	margin-right: 50px;

	${down('sm')} {
		display: flex;
		flex-direction: column-reverse;
		width: 100%;
		margin: 0;
		align-items: center;

		${props => (props.hidden && css`
			display: none;
		`)}
	}
`

const Links = styled.div`
	display: flex;
	align-items: center;

	${down('sm')} {
		flex-direction: column;
		width: 100%;
	}
`

const NavbarLinkContent = styled.a`
	color: ${props => props.theme.palette.text.secondary};
	margin: 0;
	padding: 5px 15px;
	text-align: center;
	text-decoration: none;
	transition: ${createTransitions(['color', 'background-color'])};

	${down('sm')} {
		border-radius: 5px;
		background-color: ${props => props.theme.palette.button.backgroundAlternate};
		color: ${props => readableColor(props.theme.palette.button.backgroundAlternate)};
		padding: 20px;
		margin: 10px;
		width: 50%;
	}

	${up('md')} {
		&:not(:last-child) {
			border-right: 1px solid ${props => props.theme.palette.secondary.main};
		}
	}

	&:focus, &:hover {
		outline: none;
		color: ${props => props.theme.palette.secondary.main};

		${down('sm')} {
			color: ${props => readableColor(props.theme.palette.button.hoverAlternate)};
			background-color: ${props => props.theme.palette.button.hoverAlternate};
		}
	}
`

const Header = () => {
	const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);
	const router = useRouter();

	const toggleMobileNavMenu = () => {
		setIsMobileMenuHidden(value => !value);
	}

	const navigateHome = useCallback(() => {
		router.push('/')
	}, [router])

	return (
		<AppBar position="static" css={css`
			border-bottom: 5px solid ${props => props.theme.palette.secondary.main};
			background-color: ${props => props.theme.palette.grey};
		`}>
			<Toolbar css='flex-wrap: wrap'>
				<HomeButton onClick={navigateHome}>
					<Heading>
						Matt Winfield
					</Heading>
					<div css='margin: 5px 10px'>
						Digital Portfolio
					</div>
				</HomeButton>
				<div css={css`
					${up('md')} {
						flex-grow: 1;
					}
				`}></div>
				<IconButton onClick={toggleMobileNavMenu} css={css`
					${up('md')} {
						display: none;
					}
				`}>
					<MenuIcon color="primary" fontSize="large"></MenuIcon>
				</IconButton>
				<div css={css`
					${down('sm')} {
						flex-basis: 100%;
					}
				`}></div>
				<MenuContent hidden={isMobileMenuHidden}>
					<ThemeToggle></ThemeToggle>
					<Links>
						<Link href="/#about" passHref><NavbarLinkContent>About Me</NavbarLinkContent></Link>
						<Link href="/#projects" passHref><NavbarLinkContent>Projects</NavbarLinkContent></Link>
						<Link href="/#experience" passHref><NavbarLinkContent>Experience</NavbarLinkContent></Link>
						<Link href="/#qualifications" passHref><NavbarLinkContent>Qualifications</NavbarLinkContent></Link>
					</Links>
				</MenuContent>
			</Toolbar>
		</AppBar>
	)
}

export default Header;