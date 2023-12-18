import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import grayMatter from "gray-matter";
import { Buffer } from "buffer";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
window.Buffer = Buffer;

function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const theme = useTheme();

  useEffect(() => {
    fetch("/posts/index.json")
      .then((response) => response.json())
      .then((filenames) => {
        return Promise.all(
          filenames.map((filename) => {
            return fetch(`/posts/${filename}`)
              .then((response) => response.text())
              .then((markdown) => {
                const { data, content } = grayMatter(markdown);
                const readTime = calculateReadTime(content);
                return { ...data, content, readTime };
              });
          })
        );
      })
      .then((postsData) => {
        setPosts(postsData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setIsLoading(false);
      });
  }, []);

  function calculateReadTime(text) {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    const minutes = words / wordsPerMinute;
    return Math.ceil(minutes);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value.toLowerCase());
  }

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.description.toLowerCase().includes(searchTerm)
  );

  // Render a message if no posts are available
  if (!isLoading && posts.length === 0) {
    return <div className={styles.noPosts}>No posts found.</div>;
  }

  return (
    <div className={styles.home}>
      {/* Search Bar */}
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "50px" }}>
        <TextField
          label="Search Posts"
          variant="outlined"
          onChange={handleSearchChange}
          style={{ marginBottom: "20px", width: "100%", maxWidth: "500px" }}
        />
      </Box>
      {filteredPosts.map((post, index) => (
        <article key={index} className={styles.post}>
          {/* Post Title */}
          <h2 className={styles.postTitle}>
            <Link
              style={{ color: theme.palette.text.primary }}
              to={`/post/${post.slug}`}
            >
              {post.title}
            </Link>
          </h2>

          {/* Post Meta */}
          <p
            className={styles.postMeta}
            style={{ color: theme.palette.text.primary }}
          >
            {post.date} — {post.readTime} min read, by {post.author}
          </p>

          {/* Post Description */}
          <p className={styles.postDescription}>{post.description}</p>

          {/* Post Tags */}
          <div className={styles.postTags}>
            {post.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className={styles.postTag}
                style={{ backgroundColor: theme.palette.tags.background }}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Divider */}
          <Divider
            orientation="horizontal"
            sx={{ mx: 1, borderWidth: 1, marginTop: 2, marginBottom: 2 }}
          />
        </article>
      ))}
    </div>
  );
}

export default Home;
