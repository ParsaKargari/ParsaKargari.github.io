import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CopyToClipboard from "react-copy-to-clipboard";
import styles from "../styles/Post.module.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useTheme } from "@mui/material/styles";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Code({ children, className }) {
  const theme = useTheme();
  //eslint-disable-next-line
  const [copied, setCopied] = useState(false);
  const [SnackbarOpen, setSnackbarOpen] = useState(false);
  if (!className) {
    return (
      <span
        className={styles.postTag}
        style={{ backgroundColor: theme.palette.tags.background }}
      >
        {children}
      </span>
    );
  }
  const language = className.split("-")[1];

  const handleCopy = () => {
    setCopied(true);
    setSnackbarOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div className={styles.code}>
      <CopyToClipboard text={children} onCopy={handleCopy}>
        <IconButton className={styles.copyicon} aria-label="copy">
          <ContentCopyIcon />
        </IconButton>
      </CopyToClipboard>
      <SyntaxHighlighter
        language={language}
        style={materialDark}
        className={styles.syntaxHighlighter}
      >
        {children}
      </SyntaxHighlighter>
      <Snackbar
        open={SnackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Copied to clipboard!
        </Alert>
      </Snackbar>
    </div>
  );
}
