// App.js
import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Header from "./components/Header";
import Container from "@mui/material/Container";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          ...(darkMode
            ? {
                // Dark mode palette
                background: {
                  default: "#292a2d", 
                  paper: "#111111", 
                },
                primary: {
                  main: "#90caf9", 
                },
                secondary: {
                  main: "#f48fb1", 
                },
                text: {
                  primary: "#a9a9b3", 
                  secondary: "#aaaaaa", 
                },
                tags: {
                  background: "#222222", 
                },
              }
            : {
                // Light mode palette
                primary: {
                  main: "#1976d2", 
                },
                secondary: {
                  main: "#dc004e", 
                },
                text: {
                  primary: "#222222", 
                  secondary: "#555555", 
                },
                tags: {
                  background: "#eee", 
                },
              }),
        },
      }),
    [darkMode]
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Container maxWidth="md" sx={{paddingTop: "175px"}}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/post/:slug" element={<Post />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        </Container>
        {/* <Footer /> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
