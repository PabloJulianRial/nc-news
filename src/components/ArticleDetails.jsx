import { Link } from "react-router-dom";
import { useState } from "react";
import { voteArticleUp, voteArticleDown } from "../utils";

export function ArticleDetails({ article, votes, article_id }) {
  const [userVotes, setUserVotes] = useState(0);
  const [errorState, setErrorState] = useState(false);

  const handleClickUp = () => {
    setUserVotes((currentUserVotes) => {
      return currentUserVotes + 1;
    });
    voteArticleUp(1, article_id).catch((err) => {
      setUserVotes((currentUserVotes) => {
        return currentUserVotes - 1;
      });
      setErrorState(true);
    });
  };

  const handleClickDown = () => {
    setUserVotes((currentUserVotes) => {
      return currentUserVotes - 1;
    });
    voteArticleDown(-1, article_id).catch((err) => {
      setUserVotes((currentUserVotes) => {
        return currentUserVotes + 1;
      });
      setErrorState(true);
    });
  };

  return (
    <section className="article-details">
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <img src={article.article_img_url} alt="Article image" />
      <div className="votes-container">
        <div className="article-line">
          <p className="label">Votes </p>
          <span>{votes + userVotes}</span>
        </div>
        <button onClick={handleClickUp} disabled={userVotes > 0} className="up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2M1 21h4V9H1v12Z"
            />
          </svg>
        </button>
        <button
          onClick={handleClickDown}
          disabled={userVotes < 0}
          className="down"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g transform="translate(0 24) scale(1 -1)">
              <path
                fill="currentColor"
                d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2M1 21h4V9H1v12Z"
              />
            </g>
          </svg>
        </button>
        {errorState ? (
          <div className="error">Your vote didn't get registered</div>
        ) : null}
      </div>
      <div className="article-line">
        <p className="label">Author </p>
        <span>{article.author}</span>
      </div>
      <div className="article-line">
        <p className="label">Topic </p>
        <span>{article.topic}</span>
      </div>

      <Link
        className="comments-link"
        to={`/articles/${article.article_id}/comments`}
      >
        All comments
      </Link>
    </section>
  );
}
