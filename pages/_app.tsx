/// <reference types="styled-components/cssprop" />
import type { AppProps } from 'next/app'
import { StylesProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store, { createStore } from '../store/store';
import { createGlobalStyle } from 'styled-components';


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
	overflow: hidden;
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

function MyApp({ Component, pageProps }: AppProps) {
    let providedStore = store;

    // Create a new store for every request if SSG or SSR
    if (typeof window === 'undefined') {
        providedStore = createStore();
    }

    return (
        <>
            <GlobalStyle />
            <Provider store={store}>
                <StylesProvider injectFirst >
                    <Component {...pageProps} />
                </StylesProvider>
            </Provider>
        </>
    );
}
export default MyApp
