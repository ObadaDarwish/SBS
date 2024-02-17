import React from 'react';
import {ThemeProvider} from '@mui/material';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import defaultTheme from './defaultTheme';

const InitTheme = ({children}: {children: React.ReactNode}) => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<StyledThemeProvider theme={defaultTheme}>{children}</StyledThemeProvider>
		</ThemeProvider>
	);
};

export default InitTheme;
