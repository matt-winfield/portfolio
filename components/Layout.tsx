import { MuiThemeProvider } from '@material-ui/core'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { createTheme } from 'styled-breakpoints'
import styled, { ThemeProvider } from 'styled-components'
import { useToggleableTheme } from '../hooks/useToggleableTheme'
import { StoreState } from '../store/store'
import { MaterialUiTheme, Themes } from '../styles/themes'
import { Header } from './Header'

const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	background-color: ${props => props.theme.palette.background.default};
`

const Content = styled.div`
	flex-grow: 1;
	overflow-y: auto;
`

const defaultBreakpoints = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};

export const breakpointsTheme = createTheme({
    ...defaultBreakpoints,
    xxl: '2000px'
});

const Layout: FC = (props) => {
	useToggleableTheme();
	const selectedTheme = useSelector((state: StoreState) => state.theme.selectedTheme);

	return (
		<ThemeProvider theme={{ ...Themes[selectedTheme], ...breakpointsTheme }}>
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
