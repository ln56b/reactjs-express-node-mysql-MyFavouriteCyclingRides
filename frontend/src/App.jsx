import React from 'react';
import './App.css';
import CyclingRides from './components/CyclingRides';
import { ConfirmationDialogProvider } from './components/ConfirmationDialog';

function App() {
	return (
		<ConfirmationDialogProvider>
			<div>
				<CyclingRides />
			</div>
		</ConfirmationDialogProvider>
	);
}

export default App;
