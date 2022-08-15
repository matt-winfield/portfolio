import { AppBar, Toolbar } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import { useCallback } from 'react';
import { down, up } from 'styled-breakpoints';
import styled, { css } from 'styled-components';
import 'styled-components/macro';
import ThemeToggle from './ThemeToggle';

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

const Header = () => {
	const router = useRouter();

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
				<ThemeToggle></ThemeToggle>
			</Toolbar>
		</AppBar>
	)
}

export default Header;