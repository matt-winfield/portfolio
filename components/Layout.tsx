import { MuiThemeProvider } from '@material-ui/core'
import { FC } from 'react'
import { MaterialUiTheme } from '../styles/themes'
import { Header } from './Header'

const Layout: FC = (props) => {
	return (
		<MuiThemeProvider theme={MaterialUiTheme}>
			<Header />
			<main>
				{props.children}
			</main>
		</MuiThemeProvider>
	)
}

export default Layout
