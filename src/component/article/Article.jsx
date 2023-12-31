import React from "react";
import "./article.css";

const Article = ({ imageUrl, date, title }) => {
  return (
    <div className="gpt3__blog-container__article">
      <div className="gpt3__blog-container__article-img">
        <img src={imageUrl} alt="blog" />
      </div>
      <div className="gpt3__blog-container__article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
