import { createTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { DefaultTheme } from "styled-components";

declare module 'styled-components' {
	export interface DefaultTheme {
		palette: {
			background: {
				default: string,
				variant: string,
			},
			primary: {
				main: string,
				dark: string,
			},
			secondary: {
				main: string,
				alternate: string
			},
			text: {
				primary: string,
				secondary: string,
				light: string
			},
			heading: {
				background: string,
			},
			button: {
				background: string,
				hover: string,
				backgroundAlternate: string,
				hoverAlternate: string
			}
			border: {
				main: string
			},
			grey: string
		},
		transitions: {
			duration: {
				complex: number,
				standard: number
			}
		}
	}
}

export const MaterialUiTheme = createTheme({
	palette: {
		primary: {
			main: 'rgb(255, 255, 255)'
		}
	},
	typography: {
		fontFamily: '"Open Sans", sans-serif'
	}
});

const lightTheme: DefaultTheme = {
	palette: {
		background: {
			default: 'rgb(255, 255, 255)',
			variant: 'rgb(220, 220, 220)'
		},
		primary: {
			main: 'rgb(255, 255, 255)',
			dark: 'rgb(20, 20, 20)'
		},
		secondary: {
			main: 'rgb(240, 109, 0)',
			alternate: 'rgb(62, 245, 220)'
		},
		text: {
			primary: 'rgb(0, 0, 0)',
			secondary: 'rgb(255, 255, 255)',
			light: 'rgb(128, 131, 170)'
		},
		heading: {
			background: grey[900]
		},
		button: {
			background: 'rgb(255, 255, 255)',
			hover: '#d5d5d5',
			backgroundAlternate: 'rgb(80, 80, 80)',
			hoverAlternate: 'rgb(240, 109, 0)'
		},
		border: {
			main: '#707070'
		},
		grey: '#212121'
	},
	transitions: {
		duration: {
			complex: 400,
			standard: 300
		}
	},
}

const darkTheme: DefaultTheme = {
	palette: {
		background: {
			default: 'rgb(20, 20, 20)',
			variant: 'rgb(30, 30, 30)'
		},
		primary: {
			main: 'rgb(255, 255, 255)',
			dark: 'rgb(80, 80, 80)'
		},
		secondary: {
			main: 'rgb(240, 109, 0)',
			alternate: 'rgb(62, 245, 220)'
		},
		text: {
			primary: 'rgb(255, 255, 255)',
			secondary: 'rgb(255, 255, 255)',
			light: 'rgb(128, 131, 170)'
		},
		heading: {
			background: 'rgb(0, 0, 0)'
		},
		button: {
			background: 'rgb(0, 0, 0)',
			hover: 'rgb(30, 30, 30)',
			backgroundAlternate: 'rgb(80, 80, 80)',
			hoverAlternate: 'rgb(240, 109, 0)'
		},
		border: {
			main: '#707070'
		},
		grey: '#212121'
	},
	transitions: {
		duration: {
			complex: 400,
			standard: 300
		}
	},
}

export enum ThemeType {
	Light = 'light',
	Dark = 'dark'
}

export const Themes = {
	[ThemeType.Light]: lightTheme,
	[ThemeType.Dark]: darkTheme
}