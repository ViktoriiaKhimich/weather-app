import React, { FC, useEffect } from 'react';
import { Snackbar, IconButton } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../store/store';
import { addNotication } from '../../store/notificationSlice';

interface IProps {
  severity: any;
  message: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return (
    <MuiAlert
      elevation={6}
      ref={ref}
      variant='filled'
      {...props}
    />
  );
});

export const Notification: FC<IProps> = ({ severity, message }) => {
  const isOpen = useSelector((state: RootState) => state.notif.isOpen);

  const [open, setOpen] = React.useState<boolean>(isOpen);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        dispatch(
          addNotication({
            severity: '',
            message: '',
            isOpen: false,
          })
        );
      }, 4000);
    }
  }, [isOpen]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ): void => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      data-testid='notif'
      open={open}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={6000}
      onClose={handleClose}
      style={{ marginTop: 10 }}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        sx={{ width: '100%' }}
        action={
          <React.Fragment>
            <IconButton
              aria-label='close'
              color='inherit'
              sx={{ p: 0.5 }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
