import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import MyProfile from './MyProfile';
import ResponsiveDrawer from './ResponsiveDrawer';
import RideForm from './RideForm';
import RidesGallery from './RidesGallery';
import NewsCarousel from './NewsCarousel';
import SignIn from './Signin';

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
				<ResponsiveDrawer />
				<Route exact path={['/']} component={NewsCarousel}></Route>
				<Route exact path={['/']} component={RidesGallery}></Route>
				<Route path={['/add']} component={RideForm}></Route>
				<Route path={['/profile']} component={MyProfile}></Route>
				<Route path={['/signin']} component={SignIn}></Route>
			</MuiThemeProvider>
		</div>
	);
}

export default CyclingRides;
