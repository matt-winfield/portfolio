import { MuiThemeProvider } from '@material-ui/core'
import { Head } from 'next/document'
import React from 'react'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import { StoreState } from '../store/store'
import { MaterialUiTheme, Themes, ThemeType } from '../styles/themes'
import Header from './Header'

const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	background-color: ${props => props.theme.palette.background.variant};
`

const Content = styled.div`
	flex-grow: 1;
	overflow-y: auto;
`

const Layout: FC = (props) => {
	const selectedTheme = useSelector((state: StoreState) => state.theme.selectedTheme);

	return (
		<ThemeProvider theme={Themes[selectedTheme]}>
			<MuiThemeProvider theme={MaterialUiTheme}>
				<Container>
					<Header />
					<Content>{props.children}</Content>
				</Container>
			</MuiThemeProvider>
		</ThemeProvider>
	)
}

export default Layout
