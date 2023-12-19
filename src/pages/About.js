import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import DOMPurify from "dompurify";
import { useTheme } from "@mui/material/styles";

function About() {
  const [aboutContent, setAboutContent] = useState("");
  const theme = useTheme();
  const baseUrl =
    window.location.origin === "http://localhost:3000"
      ? "http://localhost:3000"
      : "https://parsakargari.github.io";

  useEffect(() => {
    fetch(`${baseUrl}/posts/about-me.md`)
      .then((response) => response.text())
      .then((markdown) => {
        setAboutContent(DOMPurify.sanitize(markdown));
      })
      .catch((error) => {
        console.error("Error fetching about content:", error);
      });
  }, []);

  const markdownLinkStyle = {
    color: theme.palette.primary.main, // or any color you want
    textDecoration: "none", // if you want to remove the underline
  };

  return (
    <div>
      <Markdown
        options={{
          overrides: {
            a: {
              component: ({ children, ...props }) => {
                return (
                  <a {...props} style={markdownLinkStyle}>
                    {children}
                  </a>
                );
              },
            },
          },
        }}
      >
        {aboutContent}
      </Markdown>
    </div>
  );
}

export default About;
