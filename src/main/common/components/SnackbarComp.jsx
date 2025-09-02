import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SnackbarComp({ open, onClose, msg, severity }) {
    if (!open) return null;
    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={onClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
                    {msg}
                </Alert>
            </Snackbar>
        </div>
    );
}
