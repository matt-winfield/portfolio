/// <reference types="styled-components/cssprop" />
import '../styles/global.scss';
import type { AppProps } from 'next/app'
import { StylesProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store, { createStore } from '../store/store';

export type PageProps = {

}

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
    let providedStore = store;

    // Create a new store for every request if SSG or SSR
    if (typeof window === 'undefined') {
        providedStore = createStore();
    }

    return (
        <Provider store={store}>
            <StylesProvider injectFirst >
                <Component {...pageProps} />
            </StylesProvider>
        </Provider>
    );
}
export default MyApp
