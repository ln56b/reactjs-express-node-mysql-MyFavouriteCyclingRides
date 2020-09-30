import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import MyProfile from './MyProfile';
import ResponsiveDrawer from './ResponsiveDrawer';
import RideForm from './RideForm';
import RidesGallery from './RidesGallery';

const THEME = createMuiTheme({
	typography: {
		fontFamily: `'Architects Daughter', cursive`,
		fontSize: 16,
	},
});

function CyclingRides() {
	return (
		<div className="cycling-rides">
			<MuiThemeProvider theme={THEME}>
				<RidesGallery />
				<RideForm />
				<MyProfile />
				<ResponsiveDrawer />
			</MuiThemeProvider>
		</div>
	);
}

export default CyclingRides;
