import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import styles from '../styles/Post.module.css';
import Markdown from 'markdown-to-jsx';
import Code from '../components/Code';

function Post() {
  const [postContent, setPostContent] = useState('');
  const { slug } = useParams();

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(markdown => {
        setPostContent(DOMPurify.sanitize(markdown));
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, [slug]);

  return (
    <article className={styles.postContent}>
      <Markdown options={{
        overrides: {
          code: Code
        }
      }}>{postContent}</Markdown>
    </article>
  );
}

export default Post;
