import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CloseIcon from '@material-ui/icons/Close';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const WIDTH = 160;

const ROUTES = [
	{ id: 1, name: 'Home', path: '/' },
	{ id: 2, name: 'Gallery', path: '/rides' },
	{ id: 3, name: 'Add a ride', path: '/add-ride' },
	{ id: 4, name: 'Sign in', path: '/signin' },
];

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: WIDTH,
			flexShrink: 0,
		},
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: WIDTH,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	closeMenuButton: {
		marginRight: 'auto',
		marginLeft: 0,
	},
}));
function ResponsiveDrawer() {
	const classes = useStyles();
	const theme = useTheme();
	const history = useHistory();

	const [mobileOpen, setMobileOpen] = React.useState(false);

	function handleDrawerToggle() {
		setMobileOpen(!mobileOpen);
	}

	function navigateToPath(route) {
		history.push(route.path);
	}

	const drawer = (
		<div>
			<List>
				{ROUTES.map((route, id) => (
					<ListItem button onClick={() => navigateToPath(route)} key={id}>
						<ListItemText primary={route.name} />
					</ListItem>
				))}
			</List>
		</div>
	);
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="Open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						My favourite cycling rides
					</Typography>
				</Toolbar>
			</AppBar>

			<nav className={classes.drawer}>
				<Hidden smUp implementation="css">
					<Drawer
						variant="temporary"
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true,
						}}
					>
						<IconButton
							onClick={handleDrawerToggle}
							className={classes.closeMenuButton}
						>
							<CloseIcon />
						</IconButton>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						className={classes.drawer}
						variant="permanent"
						classes={{
							paper: classes.drawerPaper,
						}}
					>
						<div className={classes.toolbar} />
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<div className={classes.content}>
				<div className={classes.toolbar} />
			</div>
		</div>
	);
}

export default ResponsiveDrawer;
