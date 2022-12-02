import { ServerStyleSheets as MuiServerStyleSheets } from '@material-ui/styles';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
					<link href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&display=swap" rel="stylesheet"></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}

	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const muiSheet = new MuiServerStyleSheets();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(muiSheet.collect(<App {...props} />)),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{muiSheet.getStyleElement()}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal();
		}
	}
}