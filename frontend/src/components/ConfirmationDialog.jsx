import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ConfirmationDialog = ({ open, title, message, onConfirm, onDismiss }) => {
	return (
		<Dialog open={open} onClose={onDismiss}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText>{message}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={onDismiss}>Cancel</Button>
				<Button color="primary" variant="contained" onClick={onConfirm}>
					Confirm
				</Button>
			</DialogActions>
		</Dialog>
	);
};

const ConfirmationDialogContext = React.createContext({});

const ConfirmationDialogProvider = ({ children }) => {
	const [dialogOpen, setDialogOpen] = React.useState(false);
	const [dialogConfig, setDialogConfig] = React.useState({});

	const openDialog = ({ title, message, actionCallback }) => {
		setDialogOpen(true);
		setDialogConfig({ title, message, actionCallback });
	};

	const resetDialog = () => {
		setDialogOpen(false);
		setDialogConfig({});
	};

	const onConfirm = () => {
		resetDialog();
		dialogConfig.actionCallback(true);
	};

	const onDismiss = () => {
		resetDialog();
		dialogConfig.actionCallback(false);
	};

	return (
		<ConfirmationDialogContext.Provider value={{ openDialog }}>
			<ConfirmationDialog
				open={dialogOpen}
				title={dialogConfig?.title}
				message={dialogConfig?.message}
				onConfirm={onConfirm}
				onDismiss={onDismiss}
			/>
			{children}
		</ConfirmationDialogContext.Provider>
	);
};

const useConfirmationDialog = () => {
	const { openDialog } = React.useContext(ConfirmationDialogContext);

	const getConfirmation = ({ ...options }) =>
		new Promise((res) => {
			openDialog({ actionCallback: res, ...options });
		});

	return { getConfirmation };
};

ConfirmationDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	title: PropTypes.string,
	message: PropTypes.string,
	onConfirm: PropTypes.func.isRequired,
	onDismiss: PropTypes.func.isRequired,
};

export default ConfirmationDialog;
export { ConfirmationDialogProvider, useConfirmationDialog };
