import React from "react";

const Article = ({ title, text }) => {
  const styles = {
    fontFamily: "Open Sans",
  };
  return (
    <article style={styles}>
      <h3 style={{ marginBottom: 7, textTransform: "uppercase" }}>{title}</h3>
      <p style={{ marginBottom: 40, display: "block", fontSize: 16 }}>{text}</p>
      {/* <span style={{ fontSize: 14 }}>Klaudia Śmidecka</span> */}
    </article>
  );
};

export default Article;
