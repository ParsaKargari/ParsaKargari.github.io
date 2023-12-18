import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import grayMatter from "gray-matter";
import DOMPurify from "dompurify";
import styles from "../styles/Post.module.css";
import Markdown from "markdown-to-jsx";
import Code from "../components/Code";
import { useTheme } from "@mui/material/styles";

function Post() {
  const theme = useTheme();
  const [post, setPost] = useState({ metadata: {}, content: "" });
  const { slug } = useParams();

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((markdown) => {
        const parsedMarkdown = grayMatter(markdown);
        setPost({
          metadata: parsedMarkdown.data,
          content: DOMPurify.sanitize(parsedMarkdown.content),
        });
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, [slug]);

  return (
    <article>
      <header
        className={styles.postMetadata}
        style={{
          marginBottom: "50px",
          backgroundColor: theme.palette.tags.background,
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: "30px",
          paddingRight: "50px",
          borderRadius: "10px",
          width: "fit-content",
        }}
      >
        <h1>{post.metadata.title}</h1>
        <p>{post.metadata.date}</p>
        <p>by {post.metadata.author}</p>
      </header>
      <Markdown
        className={styles.postContent}
        options={{ overrides: { code: Code } }}
      >
        {post.content}
      </Markdown>
    </article>
  );
}

export default Post;
