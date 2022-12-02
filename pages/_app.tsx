/// <reference types="styled-components/cssprop" />
import { StylesProvider } from '@material-ui/core/styles';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { createTheme } from 'styled-breakpoints';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useToggleableTheme } from '../hooks/useToggleableTheme';
import store, { createStore } from '../store/store';
import { Themes } from '../styles/themes';


const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
}

html,
body,
#__next {
	margin: 0;
	padding: 0;
	font-family: "Open Sans", sans-serif;
	width: 100%;
	height: 100%;
    background-color: ${props => props.theme.palette.background.default};
}

code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 0;
	padding: 0;
}
`;

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

const App: FC<AppProps> = ({ Component, pageProps }) => {
    const { selectedTheme } = useToggleableTheme();

    return (
        <ThemeProvider theme={{ ...Themes[selectedTheme], ...breakpointsTheme }}>
                <StylesProvider injectFirst >
                    <GlobalStyle />
                    <Component {...pageProps} />
                </StylesProvider>
        </ThemeProvider>
    )
}

function MyApp(props: AppProps) {
    let providedStore = store;

    // Create a new store for every request if SSG or SSR
    if (typeof window === 'undefined') {
        providedStore = createStore();
    }

    return (
        <Provider store={store}>
            <App { ...props } />
        </Provider>
    );
}
export default MyApp
