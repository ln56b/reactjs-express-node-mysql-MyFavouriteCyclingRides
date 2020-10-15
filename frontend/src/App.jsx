import React from 'react';
import './App.css';
import CyclingRides from './components/CyclingRides';
import { ConfirmationDialogProvider } from './components/ConfirmationDialog';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const THEME = createMuiTheme({
	typography: {
		fontFamily: `'Architects Daughter', cursive`,
		fontSize: 16,
	},
});

function App() {
	return (
		<MuiThemeProvider theme={THEME}>
			<ConfirmationDialogProvider>
				<div>
					<CyclingRides />
				</div>
			</ConfirmationDialogProvider>
		</MuiThemeProvider>
	);
}

export default App;
