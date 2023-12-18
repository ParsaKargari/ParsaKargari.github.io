// Post.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/Post.module.css';
import { marked } from 'marked';


function Post() {
  const [postContent, setPostContent] = useState('');
  const { slug } = useParams(); // Get the slug from the URL

  useEffect(() => {
    // Assuming your posts are in the 'public/posts' directory
    fetch(`/posts/${slug}.md`)
      .then(response => response.text())
      .then(text => {
        setPostContent(marked(text)); // Convert Markdown to HTML
      })
      .catch(err => console.error("Failed to load post content", err));
  }, [slug]);

  return (
    <article className={styles.postContent}>
      {/* Display the post content as HTML */}
      <div dangerouslySetInnerHTML={{ __html: postContent }} />
    </article>
  );
}

export default Post;
