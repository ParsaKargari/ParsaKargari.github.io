import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import DOMPurify from 'dompurify';

function About() {
  const [aboutContent, setAboutContent] = useState('');

  useEffect(() => {
    fetch('/posts/about-me.md')
      .then((response) => response.text())
      .then((markdown) => {
        setAboutContent(DOMPurify.sanitize(markdown));
      })
      .catch((error) => {
        console.error("Error fetching about content:", error);
      });
  }, []);

  return (
    <div>
      <Markdown>{aboutContent}</Markdown>
    </div>
  );
}

export default About;
