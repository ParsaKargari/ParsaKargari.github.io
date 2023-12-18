import React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import InfoIcon from "@mui/icons-material/Info";
import Divider from "@mui/material/Divider";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

function Header({ toggleDarkMode, darkMode }) {
  const theme = useTheme();

  return (
    <AppBar color="default">
      <Container maxWidth="md">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "inherit",
          }}
        >
          <Typography variant="h6" noWrap>
            <Link
              component={RouterLink}
              to="/"
              underline="none"
              sx={{
                fontWeight: "bold",
                fontFamily: "monospace",
                color: theme.palette.text.primary,
              }}
            >
              ../parsakargari
            </Link>
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: theme.palette.text.primary,
            }}
          >
            <IconButton
              color="inherit"
              component={RouterLink}
              to="/about"
            >
              <InfoIcon />
            </IconButton>

            <IconButton
              color="inherit"
              component="a"
              href="https://github.com/parsakargari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              component="a"
              href="https://www.linkedin.com/in/parsa-kargari/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ mx: 1, borderWidth: 1 }}
            />
            <IconButton color="inherit" onClick={toggleDarkMode}>
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
