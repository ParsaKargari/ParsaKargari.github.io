import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

function Home() {
  const theme = useTheme();
  const posts = [
    {
      title: "The Evolution of Web Development",
      date: "2023-12-17",
      readTime: "10 min read",
      description:
        "The web has come a long way since the early 2000s. Let's take a look at how web development has evolved over the years.",
      tags: ["#webdev", "#history"],
    },
  ];

  // Create Slug Automatically from Title
  const slugify = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-").slice(0, 200);
  };

  return (
    <div className={styles.home}>
      {posts.map((post, index) => (
        <article key={index} className={styles.post}>
          {/* Post Title */}
          <h2 className={styles.postTitle}>
            <Link
              style={{ color: theme.palette.text.primary }}
              to={`/post/${slugify(post.title)}`}
            >
              {post.title}
            </Link>
          </h2>

          {/* Post Meta */}
          <p
            className={styles.postMeta}
            style={{ color: theme.palette.text.primary }}
          >
            {post.date} — {post.readTime}
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
                {tag}
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
