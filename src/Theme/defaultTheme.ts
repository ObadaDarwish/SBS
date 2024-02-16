import {ThemeOptions, createTheme} from '@mui/material';

const defaultTheme: ThemeOptions = createTheme({
	typography: {
		allVariants: {
			fontFamily: 'var(--Roboto)',
			color: '#232F3F',
		},
	},
	palette: {
		mode: 'light',
		background: {
			default: '#fafafa',
			paper: '#ffffff',
		},
		primary: {
			light: '#5faef1',
			main: '#58adf2',
			dark: '#4caaf3',
			contrastText: '#fff',
		},
		secondary: {
			light: '#6873f3',
			main: '#5865F2',
			dark: '#4352f3',
			contrastText: '#fff',
		},
		info: {
			light: '#f3f2f2',
			main: '#ebebec',
			dark: '#9CA3A7',
			contrastText: '#555555',
		},
		text: {
			primary: '#232F3F',
			secondary: '#2D3648',
			disabled: '#a4a4a4',
		},
	},
	components: {
		MuiPaper: {
			defaultProps: {
				elevation: 0,
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					background: '#fff',
				},
			},
		},
		MuiAppBar: {
			defaultProps: {
				sx: {
					paddingX: {
						xl: 7,
						lg: 7,
						md: 1,
						sm: 0,
						xs: 0,
					},
				},
			},
			styleOverrides: {
				root: {
					backgroundColor: '#fff',
					color: '#000',
					position: 'sticky',
					top: 0,
					zIndex: 1,
				},
			},
		},

		MuiContainer: {
			defaultProps: {
				sx: {
					maxWidth: {
						xl: '85%',
						lg: '85%',
					},
					padding: {
						sm: 3,
						xs: 2,
					},
				},
			},
		},
	},
});

export default defaultTheme;
