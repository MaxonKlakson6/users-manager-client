import { Alert, Snackbar as MuiSnackbar } from "@mui/material";
import type { AlertColor, SnackbarOrigin } from "@mui/material";
import { useState } from "react";

interface SnackBarProps {
  message: string;
  severity: AlertColor;
  duration: number;
  position: SnackbarOrigin;
  onClose?: () => void;
}
const SnackBar = ({
  message,
  severity,
  duration,
  position,
  onClose,
}: SnackBarProps): JSX.Element => {
  const [isOpen1, setIsOpen] = useState<boolean>(true);

  const handleOpenChange = () => {
    setIsOpen(false);

    if (onClose) {
      onClose();
    }
  };

  return (
    <MuiSnackbar
      open={isOpen1}
      autoHideDuration={duration}
      onClose={handleOpenChange}
      anchorOrigin={position}
    >
      <Alert severity={severity}>{message}</Alert>
    </MuiSnackbar>
  );
};

export default SnackBar;
